const { User } = require('../models/user.model');
const { Media } = require('../models/media.model');
const mongoose = require('mongoose');
const gridfs = require('gridfs-stream');
const mongodb = require("../../database/db");
const mongo = require('mongodb');
const Grid = require('gridfs-stream');
const uploadService = require('../services/upload.service')
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const mongoUser = process.env.MONGOUSER;

let resetUserPortflio = async (id, res) => {
    return new Promise((resolve, reject) => {
        User.findOne({ _id: id }, (err, user) => { 
            if (err) reject(err);
            else {
                user.portfolio.forEach((port) => {
                    if (port.evidence.length > 0) {
                        port.evidence.forEach(evidence => {
                            uploadService.evidenceBucket.delete(evidence.fileId);
                        });
                    }
                    uploadService.fileBucket.delete(port.fileId)
                    let media = Media.findByIdAndDelete(port._id)
                });
            }
            return user
        }).then((resp) => {
            resp.portfolio = [];
            resp.save();
            resolve(resp);
        });
    })
}

module.exports = {
    resetUserPortflio
}