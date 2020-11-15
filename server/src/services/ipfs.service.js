const IPFS = require('ipfs-api')
const server = require('../server');
const { Media } = require('../models/media.model')
const fs = require('fs');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var ejs = require('ejs');
const StreamToArray = require('stream-to-array')
const IPFSHash = require('ipfs-only-hash');

async function writeShareableFile(req) {
    let shareTemplate = './src/views/shareTemplate.html';
    let ejsTemplate = './src/templates/shareMediaPort.ejs';
    let stream = fs.createWriteStream(shareTemplate);
    var templateString = fs.readFileSync(ejsTemplate, 'utf-8');

    stream.once('open', function (fd) {
        let html = ejs.render(templateString, {
            media: req.media,
        });
        stream.end(html);
    })
    return (shareTemplate)

}

async function readShareableFile(file) {
    return new Promise((resolve, reject) => {
        let downloadStream = fs.createReadStream(file);
        StreamToArray(downloadStream)
            .then(function (parts) {
                var buffers = []
                for (var i = 0, l = parts.length; i < l; ++i) {
                    var part = parts[i]
                    buffers.push((part instanceof Buffer) ? part : new Buffer(part))
                }
                return Buffer.concat(buffers)
            }).then((resp) => {
                resolve(resp)
            })
    })
}

let getMediaObjectByUrl = async (req, res, next) => {
    let media = await Media.findOne({ mediaUrl: req.params.ipfs }).exec();
    req.media = media;
    next();
}

async function generateIPFS_URL(data) {
    let IPFS_URL = await IPFSHash.of(data, { hashAlg: 'sha2-256', cidVersion: 1 })
    return IPFS_URL;
}

async function postFileToIpfs(data) {
    return new Promise((resolve, reject) => {
        ipfs.add(data, { hashAlg: 'sha2-256', cidVersion: 1 }, (err, ipfsHash) => {
            if (err) reject(err);
            else {
                resolve(ipfsHash)
            }
        });
    });
}

async function getFileFromIpfs(url) {
    let stream = ipfs.cat(url, () => { })
    let buffers = []
    for await (let parts of stream) {
        for (var i = 0, l = parts.length; i < l; ++i) {
            var part = parts[i]
            buffers.push((part instanceof Buffer) ? part : new Buffer(part))
        }
        return Buffer.concat(buffers)
    }
}

// set the view engine to ejs

module.exports = {
    ipfs,
    generateIPFS_URL,
    postFileToIpfs,
    getFileFromIpfs,
    getMediaObjectByUrl,
    writeShareableFile,
    readShareableFile
}