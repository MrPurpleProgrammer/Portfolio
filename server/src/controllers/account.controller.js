const {User} = require('../models/user.model');
const {Account} = require('../models/account.model');
const accountService = require('../services/account.service')
const authService = require('../services/authentication.service')

let getAllAccounts = (req, res, next) => {
    Account.find((err, users) => {
        if (err) return console.error(err);
        res.send(users);
    });
    next();
}

let getAccountData = async (req, res, next) => {
    try {
        let user = await authService.getUserByAccountId(req.account.userId);
        res.status(200).json({account: req.account, user: user, status: 200, message: 'Account Found!'});

    }
    catch {
        res.status(400).json({account: null, user: null, status: 400, message: 'Account Not Found!'});
    }
}

let isAccountAuthorized = (req, res, next) => {
    const authorized = req.account && req.auth && req.auth.id == req.account.id;
    if(!authorized) {
        return res.status(400).json({
            error: "User is not authorized for this action.",
            url: req.url,
        });
    }
}

module.exports = {
    getAllAccounts,
    isAccountAuthorized,
    getAccountData
}