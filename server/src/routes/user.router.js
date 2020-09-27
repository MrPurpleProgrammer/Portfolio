const router = require('express').Router();
const {User} = require('../models/user.model');
const userService = require('../services/user.service');
const userController = require('../controllers/user.controller');
const {isAccountAllowed} = require('../services/authentication.service');

router.post('/reset/portfolio', function(req, res, next) {
    userController.resetUserPortfolio(req, res);
});

router.get('/read/all', (req,res) => {
    User.find((err, users) => {
        if (err) return console.error(err);
        res.send(users);
    })
});

router.post('/update/post', (req, res) => {

});

router.post('/delete', (req, res) => {
    
});

router.post('/create', (req, res) => {

});

module.exports = router;