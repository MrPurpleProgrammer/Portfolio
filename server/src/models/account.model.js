const mongoose = require('mongoose');
const MediaModel = require('./media.model');
const UserModel = require('./user.model')
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const Schema = mongoose.Schema;

//Schema Definition
const accountSchema = new Schema({
    userId: { type:Schema.Types.ObjectId, required: true},
    accountType: {type: String, require: false},
    firstName: { type: String, require: false },
    lastName: { type: String, require: false },
}, { timestamps: true });

//Virtuals
//Methods
accountSchema.methods.authenticate = function (str) {
    
}
const Account = mongoose.model('Account', accountSchema);
module.exports = {Account, accountSchema};