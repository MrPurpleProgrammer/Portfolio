const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
        mediaId: Schema.Types.ObjectId,
        mediaType: { type: String, required: true},
        certificateId: {type: String, required: true}, 
        mediaTitle: {type: String, required: true},
        description: {type: String, required: false},
        mediaCreator: {type: String, required: true},
        fileId: {type: String, required: true},
        evidenceId:{type: String, required: true},
    }, {
        timestamps: true,
    });

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media;