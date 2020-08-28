const router = require('express').Router();
const uploadController = require('../controllers/upload.controller');
const { validateCreateRequest, validate } = require('../middleware/validators/upload.validator');
const { mediaUploadHandler } = require('../services/upload.service');
const { assetMemStorage } = require('../services/asset.service');
const {isAccountAllowed} = require('../services/authentication.service')
const {getAccountByUserId} = require('../controllers/account.controller');

router.get('/read/all', (req, res) => {
    uploadController.getAllMedia(req, res);
});

router.get('/read/:certificateId', (req, res) => {
    uploadController.getMedia(req, res);
});

router.get('/update/get', (req, res) => {
});

router.post('/update/post', (req, res) => {
});

router.post('/delete', (req, res) => {
});

router.post('/create', isAccountAllowed, mediaUploadHandler.any(), validateCreateRequest(), validate, (req, res, next) => {
    uploadController.postMedia(req, res, next);
});

router.post('/generate/assetHash', isAccountAllowed, assetMemStorage.single('asset'), (req, res) => {
    let assetHash = uploadController.getAssetHash(req, res);
});

module.exports = router;