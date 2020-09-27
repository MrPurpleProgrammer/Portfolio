
const uploadService = require('../services/upload.service')
const {DHash, PHash, generateIPFS_URL} = require('../services/asset.service')
const {postFileToIpfs} = require('../services/upload.service')
const async = require('async')
const {User} = require('../models/user.model')
const {Account} = require('../models/account.model')

let postMedia = async (req, res) => {
  try{
    let media = await uploadService.setNewMedia(req);
    let account = await Account.findOne({_id: req.auth._id});
    let user = await User.findOne({_id: account.userId});
    let data = await uploadService.getMediaStream(media.fileId);
    postFileToIpfs(data);
    user.portfolio.push(media);
    user.save();
    res.status(201).json({media: media});
  }
  catch (err) {
    res.status(401).send(err);
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
  let dhash = new DHash(req.file);
  let assetHash_d = await dhash.getDHash();
  let phash = new PHash(req.file);
  let assetHash_p = await phash.getPHash();
  let ipfsUrl = await generateIPFS_URL(req.file.buffer);
  res.json({dhash: assetHash_d, phash: assetHash_p, url: ipfsUrl});
}

module.exports = {
  postMedia, 
  getMedia,
  getAllMedia,
  getAssetHash,
};