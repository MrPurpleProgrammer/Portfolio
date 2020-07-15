
const mongoURI = process.env.MONGODB_URI;
const mongodb = require("../../database/db");
const multihashes = require('multihashes');
const path = require("path");
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require("multer");
const uploadDict = require('../dictionaries/upload.dictionary');
const GridFsStorage = require("multer-gridfs-storage");
const Media = require('../models/media.model');
var gridfs = require('gridfs-stream');
var fs = require('fs');
const EvidenceModel = require("../models/evidence.model");

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

//File Storage
let storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
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
            }
          };
          resolve(fileInfo);
        }
        else if (fieldType == "media_evidence") {
          const fileInfo = {
            fileName: filename,
            aliases: [req.body.mediaTitle + '_evidence'],
            bucketName: "evidenceUploads",
            metadata: { inputName: file.fieldname, filetype: fieldType, tags: req.body.mediaTags }
          };
          resolve(fileInfo);
        }
        else {
          console.log('FieldType Unauthorized or not Found');
          reject('FieldType Unauthorized or not Found');
        }
      });
    });
  }
})

let fileStorage = multer({
  storage: storage
});

//Media Collection 
let setMediaModel = function (req) {
  return new Promise((resolve, reject) => {
    if (typeof req.files[0] != "undefined" && typeof req.files[1] != "undefined" && req.body.termAgree == "true") {
      let mid = mongoose.Types.ObjectId();
      if (req.body.storeOption == 'IPFS') {
        let newMedia = new Media({
          mediaId: mid,
          mediaType: req.files[0].contentType,
          certificateId: 'CID',
          mediaTitle: req.body.mediaTitle,
          mediaCreator: req.body.userHash,
          evidence: req.files.slice(1).map((e, i) => {
            return new EvidenceModel.Evidence({
              uid: mongoose.Types.ObjectId(),
              fileId: e.id,
              mediaId: mid,
              mediaType: e.contentType,
            })
          }),
        });
        newMedia.save((err, media) => {
          if (err) reject(err);
          else { resolve('IPFS Media Added: ' + media); }
        });
      }
      else {
        let newMedia = new Media({
          mediaId: mid,
          mediaType: req.files[0].contentType,
          certificateId: 'CID',
          mediaTitle: req.body.mediaTitle,
          mediaCreator: 'MrPurple',
          fileId: req.files[0].id,
          evidence: req.files.slice(1).map((e, i) => {
            return new EvidenceModel.Evidence({
              uid: mongoose.Types.ObjectId(),
              fileId: e.id,
              mediaId: mid,
              evidenceType: e.contentType,
            })
          }),
        });
        newMedia.save((err, media) => {
          if (err) reject(err);
          else { resolve('Port Media Added: ' + media); }
        });
      }
    }
    else {
      reject('Error: No Evidence or Image to set; or Terms not checked');
    }
  });
}

let getMediaStream = function (file, res) {
  fileBucket.openDownloadStream(file.id).pipe(res);
}

let getFileId = function (cid) {
  return new Promise(resolve => {
    Media.findOne({ certificateId: cid }, function (err, media) {
      if (err) resolve.status(400).send(err);
      else resolve(media.fileId);
    });
  });
}

let getMediaObject = function (req) {
  cid = req.params.certificateId;
  fid = getfileId(cid);
  return new Promise(resolve => {
    fileBucket.find({ fid }).toArray((err, files) => {
      // check if files
    });
  });
}

let getMediaCollection = function (res) {
  return new Promise(resolve => {
    fileBucket.find().toArray((err, files) => {
      // check if files
      if (!files || files.length === 0) {
        return resolve({
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

//For now the Id is static
const ipfsId = "QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u";
//Convert Id into multihash data bytes
let mh = multihashes.fromB58String(Buffer.from(ipfsId))
//Store as argument object
let args = {
  hashFunction: '0x' + mh.slice(0, 4),
  hash: '0x' + mh.slice(2),
  size: mh.length - 2
}
//Javascript code when using Artifacts
/*it('should store the IPFS Hash in the logs', async () => {
  instance.storeCIDInTheLog(ipfsId, { 'from': accounts[0] }).then(function (txReceipt) {
    console.log('# should store the IPFS Hash in the logs');

    let gasUsed = txReceipt.receipt.gasUsed;
    console.log("gasUsed: " + gasUsed + " units");

    let gasCost = gasUsed * gasPrice;
    console.log("gasCost (wei): " + gasCost + " wei");

    let gasCostEth = web3.fromWei(gasCost, 'ether')
    console.log("gasCost (ether): " + gasCostEth + " ether");
  }).catch(function (error) {
    console.log(error);
  });
});*/


module.exports = {
  fileStorage,
  setMediaModel,
  getMediaObject,
  getMediaCollection,
  getCertificateCollection,
};