const {Media} = require('../models/media.model');
const {Account} = require('../models/account.model');
const accountService = require('../services/account.service')
const authService = require('../services/authentication.service')
const ipfsService = require('../services/ipfs.service')

let createMediaPort = async (req, res, next) => {
    let shareableFilePath = await ipfsService.writeShareableFile(req);
    let file = await ipfsService.readShareableFile(shareableFilePath);
    let shareUrl = await ipfsService.postFileToIpfs(file);
    res.status(201).json({share: shareUrl, media: req.media});
}

module.exports = {
    createMediaPort,
}