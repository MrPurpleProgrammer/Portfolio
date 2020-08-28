const router = require('express').Router();
const authenticationController = require('../controllers/authentication.controller');
const { validateCreateRequest, validateWeb2LoginRequest, validateWeb3LoginRequest, validate } = require('../middleware/validators/authentication.validator');
const {logout} = require('../services/authentication.service');
const {getUserByAccountId} = require('../controllers/account.controller');

router.post('/create/user', validateCreateRequest(), validate, (req, res, next) => {
    authenticationController.userSignup(req, res, next);
});

router.post('/user/web2/login', validateWeb2LoginRequest(), validate, (req, res, next) => {
    authenticationController.userLogin(req, res, 'web2');
});

router.post('/user/web3/login', (req, res, next) => {
    authenticationController.userLogin(req, res, 'web3');
});

router.post('/user/logout', (req, res, next) => {
    logout(req, res);
});

module.exports = router;