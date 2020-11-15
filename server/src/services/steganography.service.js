const sharp = require('sharp');

let setImageMetadata = async (buffer, media) => {
    let file = sharp(buffer)
    file.withMetadata().then((metadata) => {
        metadata.dmct = JSON.stringify(media);
        console.log(metadata);
        return metadata;
    }).then(() => {
        file.toBuffer()
    });
}

class ImageSteganograph {
    constructor(data, secret) {
        this.mediaBuffer = data;
        this.secretBuffer = secret;
    }

    LSB () {

    }

    encodeData() {
            
    }

    decodeData() {

    }
}
module.exports = {
    setImageMetadata,
    ImageSteganograph
}