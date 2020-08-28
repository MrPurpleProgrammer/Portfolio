const router = require('express').Router();
const User = require('../models/user.model');
const client = require('../../database/db');
const authController = require('../controllers/authentication.controller');
const accountController = require('../controllers/account.controller');
const accountService = require('../services/account.service');
const {isAccountAllowed} = require('../services/authentication.service');

router.get('/read/:accountId', isAccountAllowed, (req, res, next) => {
    accountController.getAccountData(req,res,next);
});

router.get('/read/all', isAccountAllowed, (req, res, next) => {
    accountController.getAllAccounts(req,res,next);
});

router.get('/update/get', (req,res) => {
    
});

router.post('/update/post', (req, res) => {

});

router.post('/delete', (req, res) => {
    
});

router.post('/create', (req, res) => {

});

router.param('accountId', accountService.getAccountById)

module.exports = router;