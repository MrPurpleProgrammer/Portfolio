const { User } = require('../models/user.model');
const { Account } = require('../models/account.model');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config();
const { getAccountByUserId } = require('../services/account.service')

let doesUserExist = async (queryObj) => {
    return new Promise((resolve) => {
        User.findOne(queryObj, (err, user) => {
            let fieldType = Object.keys(queryObj);
            if (err || !user) {
                resolve({
                    userDoc: null,
                    error: { message: "User" + fieldType[0] + "does not exist, please sign in.", error: err },
                    status: 410
                });
            }
            else {
                resolve({ userDoc: user, error: null, status: 200 });
            }
        });
    });
}
let doesPasswordAuthenticate = (user, password) => {
    if (!user.userDoc.authenticate(password)) return false;
    else return true;
}
let setNewUser = async (req) => {
    return new Promise((resolve) => {
        let newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                console.log(err, user);
                resolve({ error: err, status: 425, user: null });
            }
            else resolve({ error: err, status: 200, user: user });
        });
    })
}
let setNewAccount = async (req) => {
    let newUser = await setNewUser(req);
    return new Promise((resolve) => {
        let uid = newUser.user._id;
        let newAccount = new Account({
            userId: uid,
        });
        newAccount.save((err, account) => {
            if (err) {
                User.findById(uid)
                    .then(resp => User.remove({ _id: uid }, (error) => {
                        console.log(err, account);
                        resolve({ error: err, status: 425, account: null, user: error });
                    }));
            }
            else resolve({ error: err, status: 200, account: account, user: newUser });
        });
    });
}

let authenticateUserLogin = async (req, res) => {
    let user = await doesUserExist({ email: req.body.email });
    if (user.userDoc != null && user.error == null && user.status == 200) {
        let isUserAuthenticated = doesPasswordAuthenticate(user, req.body.password);
        if (isUserAuthenticated) {
            let account = await getAccountByUserId(user.userDoc._id);
            const web3ArtisanIds = [user.userDoc.artisanId];
            const token = jwt.sign({ _id: account.accountDoc._id, artisanIds: web3ArtisanIds }, process.env.JWT_SECRET);
            let today = new Date();
            let expirationTime = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            return { token: token, expiration: expirationTime, uid: user.userDoc._id, username: user.userDoc.username, account: account.accountDoc, status: user.status, error: user.error };
        }
        else {
            return { token: null, expiration: new Date(0), uid: null, username: user.userDoc.username,  account: null, status: 402, error: 'Password does not match Username, try again.' }
        }
    }
    else {
        return { token: null, expiration: new Date(0), uid: null, username: null, account: null, status: 401, error: 'Username does not exist, try again.' };
    }
}

let getUserByAccountId = async (id) => {
    let user = await User.findById({_id: id}).exec();
    let userMod = {id: user._id, username: user.username, artisanId: user.artisanId, email: user.email, phoneNumber: user.phoneNumber, portfolio: user.portfolio};
    return userMod;
}

let authenticateWeb3Login = async (req, res) => {
    // User.findOne({email: req.body.email}, (err, user) => {
    //     if(err || !user) {
    //         res.status(401).json({
    //             error: "User email does not exist, please sign in."
    //         });
    //     }
    //     if(!user.authenticate(req.body.password)) {
    //         res.status(402).json({
    //             error: "Password does not match the Email information."
    //         });
    //     }
    //     const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    //     let expirationTime = new Date() + (7*24*60*60*100)
    //     res.cookie("authLoginToken", token, {expire: expirationTime});
    //     return res.status(200).json({
    //         token, user: {id: user._id, email: user.email, username: user.username}
    //     })
    // });
}

let isAccountAllowed = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
});

let logout = (req, res) => {
    res.clearCookie('authLoginToken');
    return res.json({ message: 'Logout Success!' });
};

module.exports = {
    doesUserExist,
    setNewUser,
    authenticateUserLogin,
    authenticateWeb3Login,
    isAccountAllowed,
    logout,
    setNewAccount,
    getUserByAccountId
}