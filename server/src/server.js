'use strict'
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongodb = require("../database/db");
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
//let renderClient = require('./renderClient');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
const server = express();
const port = process.env.PORT || 5000

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");  
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
server.use(limiter);
server.use(express.json())
server.use(bodyParser.json());
server.use(cors());
//renderClient(server);
server.listen(port, () => console.log(`Server started on port ${port}`))

const router = require('./routes/router');
router.indexRoutes(server);

module.exports = server;
