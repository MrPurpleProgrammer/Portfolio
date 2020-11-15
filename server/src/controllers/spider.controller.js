const {Media} = require('../models/media.model');
const accountService = require('../services/account.service')
const authService = require('../services/authentication.service')
const spiderService = require('../services/spider.service')

let detectWebPropogation = async (req, res, next) => {
    let mediaBuff = await spiderService.getMediaBuffer(req.media.fileId);
    let detectionStats = await spiderService.imageWebDetection(mediaBuff);
    res.json(detectionStats);
}

module.exports = {
    detectWebPropogation,
}