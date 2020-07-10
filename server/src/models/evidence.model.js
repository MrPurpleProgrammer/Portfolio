const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evidenceSchema = new Schema({
    fileId: { type: Schema.Types.ObjectId, required: true },
    mediaId: { type: Schema.Types.ObjectId, required: true },
    evidenceType: { type: String, required: true },
}, {
    timestamps: true,
});

const Evidence = mongoose.model('Evidence', evidenceSchema);
module.exports = {Evidence, evidenceSchema};