const router = require('express').Router();
const Media = require('../models/media.model');
const client = require('../../database/db');
const uploadController = require('../controllers/upload.controller');
const {fileStorage} = require('../services/upload.service');
const {assetMemStorage} = require('../services/asset.service');

router.get('/read/all', (req, res) => {
    uploadController.getAllMedia(req, res);
});

router.get('/read/:certificateId', (req, res) => {
    uploadController.getMedia(req, res);
});

router.get('/update/get', (req,res) => {
});

router.post('/update/post', (req, res) => {
});

router.post('/delete', (req, res) => {
});

router.post('/create', fileStorage.any(), (req, res, next) => {
    uploadController.postMedia(req, res, next);
});

router.post('/generate/assetHash', assetMemStorage.any(), (req, res) => {
    let assetHash = uploadController.getAssetHash(req, res);
});

module.exports = router;