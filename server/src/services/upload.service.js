
const mongoURI = process.env.MONGODB_URI;
const mongodb = require("../../database/db");
const multihashes = require('multihashes');
const path = require("path");
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require("multer");
const uploadDict = require('../dictionaries/upload.dictionary');
const GridFsStorage = require("multer-gridfs-storage");
const {Media} = require('../models/media.model');
const gridfs = require('gridfs-stream');
const fs = require('fs');
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


//Media Collection 
let setNewMedia = function (req) {
  return new Promise((resolve, reject) => {
    let walletTxObj = JSON.parse(req.body.walletTransactionData);
    let assetHash = walletTxObj.assetHash;
    if (typeof req.files[0] != "undefined" && req.body.termAgreeOption == "true") {
      let mid = mongoose.Types.ObjectId();
      if (req.body.storeOption == 'IPFS') {
        let newMedia = new Media({
          mediaId: mid,
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
              mediaId: mid,
              evidenceType: e.contentType,
            })
          }),
          mediaUrl: walletTxObj.url.string,
          assetHash: assetHash,
        });
        newMedia.save((err, media) => {
          if (err) reject(err);
          else { resolve(media); }
        });
      }
      else {
        let newMedia = new Media({
          mediaId: mid,
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
              mediaId: mid,
              evidenceType: e.contentType,
            })
          }),
          mediaUrl: walletTxObj.url.string,
          assetHash: assetHash,
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
  mediaUploadHandler,
  setNewMedia,
  getMediaObject,
  getMediaCollection,
  getCertificateCollection,
};