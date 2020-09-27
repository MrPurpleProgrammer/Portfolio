
const mongoURI = process.env.MONGODB_URI;
const mongodb = require("../../database/db");
const multihashes = require('multihashes');
const path = require("path");
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require("multer");
const uploadDict = require('../dictionaries/upload.dictionary');
const GridFsStorage = require("multer-gridfs-storage");
const { Media } = require('../models/media.model');
const gridfs = require('gridfs-stream');
const fs = require('fs');
const EvidenceModel = require("../models/evidence.model");
const imageThumbnail = require('image-thumbnail');
const StreamToArray = require('stream-to-array')
const { ipfs } = require('./ipfs.service');
const { reject } = require("async");
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
let uploadStorage = new GridFsStorage({
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
        const bucketName = uploadDict.uploadInputFields(file.fieldname);
        let txObj = JSON.parse(req.body.walletTransactionData);
        if (typeof req.body.mediaTags != 'object') req.body.mediaTags = JSON.parse(req.body.mediaTags);
        let certId = txObj.certificateId;
        let txHash = txObj.txReceipt.transactionHash;
        let url = txObj.url.string;
        if (req.body.walletTransactionStatus == 'true' && req.body.termAgreeOption == 'true') {
          let fileObj = handleFileStorage(bucketName, filename, certId, txHash, url, req, file);
          if (fileObj.status == true) resolve(fileObj.fileInfo);
          else {
            console.log(fileObj.fileInfo);
            reject(fileObj.fileInfo);
          }
        }
        else {
          console.log('Terms not agreed upon or store in IPFS selected, Transaction not authorized.');
          reject('Terms not agreed upon or store in IPFS selected, Transaction not authorized.');
        }
      });
    });
  }
})

let handleFileStorage = (bucketName, filename, certId, txHash, url, req, file) => {
  if (bucketName == 'evidenceUploads' || bucketName == 'fileUploads') {
    let fileObj = { fileInfo: null, status: null, type: null };
    let aliases;
    if (bucketName == "evidenceUploads") aliases = [req.body.mediaTitle + '_evidence' + '_filename'];
    else aliases = [req.body.mediaTitle];
    let fileInfo = {
      fileName: filename,
      aliases: aliases,
      bucketName: bucketName,
      metadata: {
        inputName: file.fieldname,
        filetype: bucketName,
        certificateId: certId,
        transactionHash: txHash,
        url: url
      }
    };
    fileObj.fileInfo = fileInfo;
    fileObj.status = true;
    return fileObj;
  }
  else {
    console.log('BucketName Unauthorized or not Found');
    fileObj.fileInfo = "BucketName Unauthorized or not Found";
    fileObj.status = false;
    fileObj.type = null;
    return fileObj;
  }
}

let mediaUploadHandler = multer({
  storage: uploadStorage
});

let generateThumbnail = async function (req) {
  try {
    let fileBuffArr = Uint32Array.from(JSON.parse(req.body.fileBuff)).buffer;
    let thumbnail = await imageThumbnail(fileBuffArr, { percentage: 30, responseType: 'base64', jpegOptions: { force: true, quality: 90 } });
    return { thumbnail: thumbnail };
  } catch (err) {
    console.log(err);
    return null;
  }
}
//Media Storage 
let setNewMedia = async function (req) {
  return new Promise((resolve, reject) => {
    let walletTxObj = JSON.parse(req.body.walletTransactionData);
    let assetHash = walletTxObj.assetHash;
    if (typeof req.files[0] != "undefined" && req.body.termAgreeOption == "true") {
      if (req.body.storeOption == 'IPFS') {
        let newMedia = new Media({
          mediaType: req.files[0].contentType,
          certificateId: walletTxObj.certificateId,
          mediaTitle: req.body.mediaTitle,
          mediaTags: req.body.mediaTags,
          transactionHash: walletTxObj.txReceipt.transactionHash,
          transactionReceipt: req.body.walletTransactionData,
          mediaCreator: req.auth._id,
          evidence: req.files.slice(1).map((e, i) => {
            return new EvidenceModel.Evidence({
              uid: mongoose.Types.ObjectId(),
              fileId: e.id,
              certificateId: walletTxObj.certificateId,
              evidenceType: e.contentType,
            })
          }),
          mediaUrl: walletTxObj.url.string,
          assetHash: assetHash,
          thumbnail: req.body.thumbnail
        });
        newMedia.save((err, media) => {
          if (err) reject(err);
          else { resolve(media); }
        });
      }
      else {
        let newMedia = new Media({
          mediaType: req.files[0].contentType,
          certificateId: walletTxObj.certificateId,
          mediaTitle: req.body.mediaTitle,
          mediaTags: req.body.mediaTags,
          transactionHash: walletTxObj.txReceipt.transactionHash,
          transactionReceipt: req.body.walletTransactionData,
          mediaCreator: req.auth._id,
          fileId: req.files[0].id,
          evidence: req.files.slice(1).map((e, i) => {
            return new EvidenceModel.Evidence({
              uid: mongoose.Types.ObjectId(),
              fileId: e.id,
              certificateId: walletTxObj.certificateId,
              evidenceType: e.contentType,
            })
          }),
          mediaUrl: walletTxObj.url.string,
          assetHash: assetHash,
          thumbnail: req.body.thumbnail
        });
        newMedia.save((err, media) => {
          if (err) reject(err);
          else { resolve(media); }
        });
      }
    }
    else {
      reject('Error: No Image to set; or Terms not checked');
    }
  });
}

let getMediaStream = async function (fid, res) {
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

let getFileId = function (cid) {
  return new Promise(resolve => {
    Media.findOne({ certificateId: cid }, function (err, media) {
      if (err) resolve.status(400).send(err);
      else resolve(media.fileId);
    });
  });
}

let getMediaObject = async function (fid) {
  return new Promise((resolve, reject) => {
    fileBucket.find({ _id: fid }).toArray((err, files) => {
      if (err) reject(err);
      if (files.length > 0) reject(err);
      console.log(files);
      // files.forEach((e) => {
      resolve(files);
      // })
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
/*      2.IPFS Storage Engine              */
/*-----------------------------------------*/

//File Storage
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
    let stream = ipfs.cat(url, () => {})
    let buffers = []
    for await (let parts of stream) {
        for (var i = 0, l = parts.length; i < l; ++i) {
          var part = parts[i]
          buffers.push((part instanceof Buffer) ? part : new Buffer(part))
        }
        return Buffer.concat(buffers)
    }
}


module.exports = {
  fileBucket,
  evidenceBucket,
  mediaUploadHandler,
  setNewMedia,
  postFileToIpfs,
  getFileFromIpfs,
  getMediaObject,
  getMediaStream,
  getMediaCollection,
  getCertificateCollection,
};