const sharp = require('sharp');
const multer = require("multer");
let assert = require('assert');
const { memoryStorage } = require('multer');
const DHASH_SIZE = 8;
const PHASH_SIZE = 32;
const IPFSHash = require('ipfs-only-hash')

let assetMemStorage = multer();

async function generateIPFS_URL(data) {
    let IPFS_URL = await IPFSHash.of(data, {hashAlg:'sha2-256' , cidVersion: 1})
    return IPFS_URL;
}

function convertBinaryToHex(str) {
    let output = '';
    for (let i = 0; i < str.length; i += 4) {
        let bytes = str.substr(i, 4);
        let decimal = parseInt(bytes, 2);
        let hex = decimal.toString(16);
        output += hex;
    }
    return new Buffer.from(output, 'hex');
}

class DHash {
    constructor(file) {
        this.file = file;
        this.hashSize = DHASH_SIZE;
    }

    px(pixels, width, x, y) {
        let pixel = width * y + x;
        assert(pixel < pixels.length);
        return pixels[pixel];
    }

    async generateImageHash() {
        let height = this.hashSize;
        let width = height + 1;
        let imageHash = sharp(this.file.buffer)
            .grayscale()
            .resize(width, height, { fit: sharp.fit.fill })
            .raw()
            .toBuffer()
            .then((pixels) => {
                //Difference Hash
                let difference = '';
                for (let row = 0; row < height; row++) {
                    for (let col = 0; col < height; col++) {
                        let left = this.px(pixels, width, col, row);
                        let right = this.px(pixels, width, col + 1, row);
                        difference += left < right ? 1 : 0;
                    }
                }
                return convertBinaryToHex(difference);
            })
            .catch((e) => {
                console.log(e);
            });
        return imageHash;
    };

    async getDHash() {
        let imageHash = await this.generateImageHash();
        let dHash = { buff: imageHash, str: imageHash.toString('hex') };
        return dHash;
    }
}

class PHash {
    constructor(file) {
        this.file = file;
        this.hashSize = PHASH_SIZE;
        this.SQRT = this.SQRT_Matrix(this.hashSize);
        this.COS = this.COS_Matrix(this.hashSize);
        this.LOW_FREQ = 8;
    }

    /* Initialize Scalar Matrices 
     * SQRT Matrix is a simple Coefficient Matrix  
     * COS Matrix is essentially a Lookup Table O(n^4)
	 */

    SQRT_Matrix(size) {
        let arr = new Array(size);
        for (let i = 1; i < size; i++) {
            arr[i] = 1;
        }
        arr[0] = 1 / Math.sqrt(2);
        return arr;
    }

    COS_Matrix(size) {
        let cosines = new Array(size);
        for (let i = 0; i < size; i++) {
            cosines[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                cosines[i][j] = Math.cos(Math.PI * j * 2 * ((i + 1) / size));
            }
        }
        return cosines;
    }

    applyDCT(signal, size) {
        let dct = new Array(size);
        for (let i = 0; i < size; i++) {
            dct[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                let sum = 0;
                for (let k = 0; k < size; k++) {
                    for (let l = 0; l < size; l++) {
                        sum += this.COS[k][i] * this.COS[l][j] * signal[k][l];
                    }
                }
                sum *= (this.SQRT[i] * this.SQRT[j]) / 4;
                dct[i][j] = sum;
            }
        }
        return dct;
    }

    async generateImageHash() {
        /*Reduce size and color. 
        * Like Average Hash, pHash starts with a small image. 
        * However, the image is larger than 8x8; 32x32 is a good size. 
        * This is really done to simplify the DCT computation and not 
        * because it is needed to reduce the high frequencies. The image 
        * is reduced to a grayscale just to further simplify the number 
        * of computations.
        */
        let imageBuff = await sharp(this.file.buffer)
            .greyscale()
            .resize(PHASH_SIZE, PHASH_SIZE, { fit: sharp.fit.fill })
            .rotate()
            .raw()
            .toBuffer();
        
        /*Reduce the Image Buffer. 
        * Reduce the Image to get only its top-left 8x8 pixels. These are the lowest
        * frequency pixel data of the image. 
        */
        let imageSig = new Array(PHASH_SIZE);
        for (let i = 0; i < PHASH_SIZE; i++) {
            imageSig[i] = new Array(PHASH_SIZE);
            for (let j = 0; j < PHASH_SIZE; j++) {
                imageSig[i][j] = imageBuff[PHASH_SIZE * j + i];
            }
        }

        /*Compute the Reduced Image DCT. 
        * The DCT separates the image into a collection of frequencies 
        * and scalars. While JPEG uses an 8x8 DCT, this algorithm uses 
        * a 32x32 DCT.
        */
        const dct = this.applyDCT(imageSig, PHASH_SIZE);

        /*Compute the average value. 
        * Like the Average Hash, compute the mean DCT value (using only 
        * the 8x8 DCT low-frequency values and excluding the first term 
        * since the DC coefficient can be significantly different from 
        * the other values and will throw off the average).
        */
        let totalSum = 0;
        for (let i = 0; i < this.LOW_FREQ; i++) {
            for (let j = 0; j < this.LOW_FREQ; j++) {
                totalSum += dct[i + 1][j + 1];
            }
        }
        const avg = totalSum / (this.LOW_FREQ * this.LOW_FREQ);

        /*Further reduce the DCT. 
        * This is the magic step. Set the 64 hash bits to 0 or 1 
        * depending on whether each of the 64 DCT values is above or 
        * below the average value. The result doesn't tell us the 
        * actual low frequencies; it just tells us the very-rough 
        * relative scale of the frequencies to the mean. The result 
        * will not vary as long as the overall structure of the image 
        * remains the same; this can survive gamma and color histogram 
        * adjustments without a problem.
        */
        let fingerprint = '';
        for (let i = 0; i < this.LOW_FREQ; i++) {
            for (let j = 0; j < this.LOW_FREQ; j++) {
                fingerprint += dct[i + 1][j + 1] > avg ? 1 : 0;
            }
        }
        let imageHash = convertBinaryToHex(fingerprint)
        return Buffer.from(imageHash, 'hex');
    };

    async getPHash() {
        let imageHash = await this.generateImageHash();
        let pHash = { buff: imageHash, str: imageHash.toString('hex') };
        return pHash;
    }
}
module.exports = {
    DHash,
    PHash,
    assetMemStorage,
    generateIPFS_URL,
}