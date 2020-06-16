
const uploadService = require('../services/upload.service')
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

module.exports = {
  postMedia, 
  getMedia,
  getAllMedia,
};