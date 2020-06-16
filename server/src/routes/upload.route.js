const router = require('express').Router();
const Media = require('../models/media.model');
const client = require('../../database/db');
const uploadController = require('../controllers/upload.controller');
const uploadService = require('../services/upload.service')

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

router.post('/create', uploadService.fileStorage.any(), (req, res, next) => {
    uploadController.postMedia(req, res, next);
});

module.exports = router;