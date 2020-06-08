
const mongoURI = process.env.MONGODB_URI;
const mongodb = require("../../database/db");
const path = require("path");
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require("multer");
const uploadDict = require('../dictionaries/upload.dictionary');
const GridFsStorage = require("multer-gridfs-storage");
const Media = require('../models/media.model');
var gridfs = require('gridfs-stream');
var fs = require('fs');

/*-----------------------------------------*/                                   
/*      1.MongoDB File Storage Engine      */
/*-----------------------------------------*/
//Configs
let fileBucket;
let evidenceBucket;
gridfs.mongo = mongoose.mongo;
mongodb.once("open", () => {
  fileBucket = new mongoose.mongo.GridFSBucket(mongodb.db, {
    bucketName: "fileUploads"
  })
  evidenceBucket = new mongoose.mongo.GridFSBucket(mongodb.db, {
    bucketName: "evidenceUploads"
  })
});

//Storage
let storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      let type;
      if (!file) {
        type = "invalid"
        let err = new Error('Please upload a file')
        err.httpStatusCode = 400
        reject(err)
      }
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fieldType = uploadDict.uploadInputFields(file.fieldname);
        if (fieldType == "novel_media") {
          const fileInfo = {
            fileName: filename,
            aliases: [req.body.mediaTitle],
            bucketName: "fileUploads",
            metadata: { 
              inputName: file.fieldname, 
              filetype: fieldType, 
              tags: req.body.mediaTags, 
              certificateId: req.body.certificateId, 
              description: req.body.mediaDescription 
            }
          };
          resolve(fileInfo);
        }
        if (fieldType == "media_evidence") {
          const fileInfo = {
            fileName: filename,
            aliases: [req.body.mediaTitle + '_evidence'],
            bucketName: "evidenceUploads",
            metadata: { inputName: file.fieldname, filetype: fieldType, tags: req.body.mediaTags, description: req.body.mediaDescription }
          };
          resolve(fileInfo);
        }
      });
    });
  }
})

let fileStorage = multer({
  storage: storage
});

let setMediaModel = function (req, cid, user) {
  let newMedia = new Media({
    mediaId: req.files[0].id,
    mediaType: req.files[0].contentType,
    certificateId: 'CID',
    mediaTitle: req.body.mediaTitle,
    mediaCreator: 'creator',
    fileId: req.files[0].id,
    evidenceId: req.files[1].id,
  });
  newMedia.save((err, media) => {
    if (err) return (err);
  });
  return ('New media added ' + newMedia);
}

let getMediaStream = function (file, res) {
  fileBucket.openDownloadStream(file.id).pipe(res);
}

let getFileId = function(cid) {
  return new Promise (resolve => {
    Media.findOne({certificateId: cid}, function (err, media) {
      if(err) resolve.status(400).send(err);
      else resolve(media.fileId);
    });
  });
}

let getMediaObject = function (req) {
  cid = req.params.certificateId;
  fid = getfileId(cid);
  return new Promise(resolve => {
      fileBucket.find({fid}).toArray((err, files) => {
      // check if files
      });
  });
}

let getMediaCollection = function (res) {
  return new Promise(resolve => {
    fileBucket.find().toArray((err, files) => {
      // check if files
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      resolve(files);
    });
  });
}

let getCertificateCollection = function () {
  return new Promise(resolve => {
    Media.find((err, media) => {
      if (err) return console.error(err);
      var mediaMap = {};

      media.forEach(function (m) {
        mediaMap[m._id] = m;
      });
      resolve(mediaMap);
    });
  });
}

/*-----------------------------------------*/                                   
/*      1.IPFS Storage Engine              */
/*-----------------------------------------*/

module.exports = {
  fileStorage,
  setMediaModel,
  getMediaObject,
  getMediaCollection,
  getCertificateCollection,
};