const assetService = require('../services/asset.service')

function isAssetUnique(req, res) {
    assetService.assetOwnershipStatus(req.body.hash).then((resp) => {
        if(resp.status == true) res.json(resp);
    });
}

module.exports = {
    isAssetUnique,
}