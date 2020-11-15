const router = require('express').Router();
const assetController = require('../controllers/asset.controller');
const {isAccountAllowed} = require('../services/authentication.service');

router.get('/read/assetHash/all', (req, res, next) => {
    assetController.isAssetUnique(req,res,next);
});

module.exports = router;