
const uploadService = require('../services/upload.service');
const async = require('async');

let postMedia = async (req, res, next) => {
  let status = uploadService.setMediaModel(req);
  res.send(status);
};

let getMedia = async (req, res, next) => {
  let mediaColl = await uploadService.getMediaObject(req, res);
  let mediaCert = await uploadService.getMediaCertificate();
  res.json({ mediaColl, mediaCert });
};

let getAllMedia = async (req, res, next) => {
  let mediaCert = await uploadService.getCertificateCollection();
  let mediaColl = await uploadService.getMediaCollection(req, res);
  res.json({ mediaColl, mediaCert });
};

module.exports = {
  postMedia,
  getMedia,
  getAllMedia
};