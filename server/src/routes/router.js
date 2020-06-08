const express = require('express')
const userRouter = require('./users.route');
const uploadRouter = require('./upload.route');

module.exports.indexRoutes = (server) => {
    server.use('/users', userRouter);
    server.use('/upload', uploadRouter);
};
