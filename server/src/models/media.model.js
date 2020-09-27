const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EvidenceModel = require('./evidence.model.js');

const mediaSchema = new Schema({
        mediaType: { type: String, required: true},
        certificateId: {type: String, required: true}, 
        mediaTitle: {type: String, required: true},
        mediaTags: {type: Array, required: true},
        transactionHash: {type: String, required: true},
        transactionReceipt: {type: String, required: true},
        mediaCreator: {type: String, required: true},
        fileId: {type: Schema.Types.ObjectId, required: false},
        evidence:{type: [EvidenceModel.evidenceSchema], required: false},
        mediaUrl: {type: String, required: false},
        assetHash: {type: String, required: false},
        thumbnail: {type: String, required: false}
    }, {
        timestamps: true,
    });

const Media = mongoose.model('Media', mediaSchema);
module.exports = {Media, mediaSchema};