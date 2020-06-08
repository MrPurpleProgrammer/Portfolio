const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minLength: 3},
    password: {type: String, required: true, unique: false}
    }, {timestamps: true});

    userSchema.methods.isAnon = function () {
    //is the user anonymous (blockchain user)
    }

const User = mongoose.model('User', userSchema);
module.exports = User;