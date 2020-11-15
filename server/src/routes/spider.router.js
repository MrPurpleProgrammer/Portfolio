const router = require('express').Router();
const spiderService = require('../services/spider.service');
const spiderController = require('../controllers/spider.controller');
const { isAccountAllowed } = require('../services/authentication.service');

router.get('/detect/web/:mediaId', (req, res, next) => {
    spiderController.detectWebPropogation(req, res, next);
});

router.param('mediaId', spiderService.getMediaObjectById)

module.exports = router;