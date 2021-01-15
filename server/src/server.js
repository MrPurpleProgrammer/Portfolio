'use strict'
require('dotenv').config()
const compression = require('compression')
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongodb = require("../database/db");
var bodyParser = require('body-parser')
const rateLimit = require("express-rate-limit");
var cookieParser = require('cookie-parser')
const {indexRoutes} = require('./routes/router');
var fs = require('fs')
 
//let renderClient = require('./renderClient');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
const server = express();
const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server started on port ${port}`));
//renderClient(server);
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname, '../../client/build')));
server.get('/Client/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
server.use(compression())
server.use(cookieParser());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");  
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
server.use(cors());
server.use(limiter);
server.use(express.json())
server.use(bodyParser.json({ limit: '10000kb' }));
indexRoutes(server);
server.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(430).json({apiCall: req.originalUrl, message: 'Protected Route: Invalid Web Token.', error: err});
  }
});
// let requestLogStream = fs.createWriteStream(path.join(__dirname, '../../logs/port-server/request.log'), { flags: 'a' })
// server.use(morgan('combined', { stream: requestLogStream }))


module.exports = server;
