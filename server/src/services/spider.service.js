require('dotenv').config();
const vision = require('@google-cloud/vision');
const { Media } = require('../models/media.model');
const mongoURI = process.env.MONGODB_URI;
const mongodb = require("../../database/db");
const mongoose = require("mongoose");
const gridfs = require('gridfs-stream');
const GridFsStorage = require("multer-gridfs-storage");
const StreamToArray = require('stream-to-array');
const uploadService = require('./upload.service');

let fileBucket;
gridfs.mongo = mongoose.mongo;
mongodb.once("open", () => {
    fileBucket = new mongoose.mongo.GridFSBucket(mongodb.db, {
        bucketName: "fileUploads"
    })
});

async function imageWebDetection(buff) {
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    // Performs label detection on the image file
    const request = {
        image: { content: buff },
        features: [{type: 'LABEL_DETECTION', maxResults: 1000}, {type: 'WEB_DETECTION', maxResults: 1000000}, {type: 'LOGO_DETECTION'}, {type: 'IMAGE_PROPERTIES'}, {type: 'CROP_HINTS'}, {type: 'TYPE_UNSPECIFIED'}]
    }
    let [detectionStats] = await client.annotateImage(request);
    return detectionStats;
}

let getMediaObjectById = async (req, res, next) => {
    let media = await Media.findById(req.params.mediaId).exec();
    req.media = media;
    next();
}

let getMediaBuffer = async function (fid, res) {
    return new Promise((resolve, reject) => {
        let downloadStream = fileBucket.openDownloadStream(fid);
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

module.exports = {
    imageWebDetection,
    getMediaObjectById,
    getMediaBuffer,
}