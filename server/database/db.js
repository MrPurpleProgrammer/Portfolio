const mongoURI = process.env.MONGODB_URI;
const mongoUser = process.env.MONGOUSER;
const mongoose = require('mongoose');

mongoose.connect(
    mongoURI, 
    {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true}
    ).then(() => {
    console.log('Mongo Database Connected by: ' + mongoUser);
    }).catch(err => {
        console.log('DB Connection Error: ' + err.message);
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db