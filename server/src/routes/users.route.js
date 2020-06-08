const router = require('express').Router();
const User = require('../models/user.model');
const client = require('../../database/db');

router.get('/read/all', (req, res) => {
    User.find((err, users) => {
        if (err) return console.error(err);
        res.send(users);
    });
});

router.get('/update/get'), (req,res) => {
    
}

router.post('/update/post', (req, res) => {

});

router.post('/delete'), (req, res) => {
    
}

router.post('/create', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });
    newUser.save((err, user) => {
        if (err) return res.send(err);
    });
    res.send('User Added:' + newUser);
});

module.exports = router;