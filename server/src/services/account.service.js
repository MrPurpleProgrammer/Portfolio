const User = require('../models/user.model');
const { Account } = require('../models/account.model');
require('dotenv').config();

let setNewAccount = async (req, user) => {
    let newAccount = await new Account({
        userId: user._id
    });
    newAccount.save((err, account) => {
        if (err) {
            console.log(err, account);
            return err;
        }
        else return account;
    });
}

let getAccountByUserId = async (id) => {
    return new Promise((resolve) => {
        Account.findOne({ userId: id }).exec((err, acc) => {
            if (err || !acc) {
                resolve({
                    error: err,
                    status: 400,
                    accountDoc: null
                });
            }
            else resolve({
                error: null,
                status: 200,
                accountDoc: acc
            });
        })
    })
}

let getAccountById = async (req, res, next) => {
    let accountId = req.params.accountId;
    let account = await Account.findById({_id: accountId}).exec();
    req.account = account;
    next();
}

module.exports = {
    setNewAccount,
    getAccountByUserId,
    getAccountById
}