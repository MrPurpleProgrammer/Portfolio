const mongoURI = process.env.MONGODB_URI;
const mongoose = require('mongoose');

mongoose.connect(mongoURI, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;