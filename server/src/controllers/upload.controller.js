
const uploadService = require('../services/upload.service')
const {DHash, PHash, generateIPFS_URL} = require('../services/asset.service')
const async = require('async')

let postMedia = async (req, res) => {
  try{
    let status = await uploadService.setMediaModel(req);
    console.log(status);
    res.status(201).send(status);
  }
  catch (err) {
    console.log(err);
  }
}

let getMedia = async (req, res, next) => {
    let mediaColl = await uploadService.getMediaObject(req, res);
    let mediaCert = await uploadService.getMediaCertificate();
    res.json({mediaColl, mediaCert});
}

let getAllMedia = async (req, res, next) => {
  let mediaCert = await uploadService.getCertificateCollection();
  let mediaColl = await uploadService.getMediaCollection(req, res);
  res.json({mediaColl, mediaCert});
}

let getAssetHash = async (req, res) => {
  let dhash = new DHash(req.files[0]);
  let assetHash_d = await dhash.getDHash();
  let phash = new PHash(req.files[0]);
  let assetHash_p = await phash.getPHash();
  let ipfsUrl = await generateIPFS_URL(req.files[0].buffer);
  res.json({dhash: assetHash_d, phash: assetHash_p, url: ipfsUrl});
}

module.exports = {
  postMedia, 
  getMedia,
  getAllMedia,
  getAssetHash,
};