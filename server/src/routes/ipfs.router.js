const router = require('express').Router();
const ipfsService = require('../services/ipfs.service');
const ipfsController = require('../controllers/ipfs.controller')
const { isAccountAllowed } = require('../services/authentication.service');

router.get('/share/post/:ipfs', (req, res, next) => {
    ipfsController.createMediaPort(req, res, next);
});

router.get('/read/media/:ipfs', (req, res, next) => {
    res.json({media: req.media});
});

router.param('ipfs', ipfsService.getMediaObjectByUrl);

module.exports = router;