const mongoose = require('mongoose');
const MediaModel = require('./media.model');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const Schema = mongoose.Schema;

//Schema Definition
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minLength: 3 },
    email: { type: String, require: true, unique: true, trim: true },
    phoneNumber: { type: String, require: true, unique: true, minLength: 10 },
    passhash: { type: String, required: true},
    salt: { type: String },
    artisanId: { type: String },
    portfolio: { type: [MediaModel.mediaSchema], required: false },
}, { timestamps: true });

//Virtuals
userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv4();
        this.passhash = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

//Methods
userSchema.methods.encryptPassword = function (password) {
    if(!password) return "Password doesn't exist.";
    try {
        let hash = crypto.createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
        return hash;
    }
    catch(err) {
        return err;
    }
}
userSchema.methods.authenticate = function (str) {
    return this.encryptPassword(str) === this.passhash;
}
const User = mongoose.model('User', userSchema);
module.exports = {User, userSchema};