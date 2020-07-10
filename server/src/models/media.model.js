const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EvidenceModel = require('./evidence.model.js');

const mediaSchema = new Schema({
        mediaId: Schema.Types.ObjectId,
        mediaType: { type: String, required: true},
        certificateId: {type: String, required: true}, 
        mediaTitle: {type: String, required: true},
        description: {type: String, required: false},
        mediaCreator: {type: String, required: true},
        fileId: {type: Schema.Types.ObjectId, required: true},
        evidence:{type: [EvidenceModel.evidenceSchema], required: true},
    }, {
        timestamps: true,
    });

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media;