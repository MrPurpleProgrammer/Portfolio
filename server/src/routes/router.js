const express = require('express')
const accountRouter = require('./account.router');
const uploadRouter = require('./upload.router');
const authenticationRouter = require('./authentication.router');
const userRouter = require('./user.router')

module.exports.indexRoutes = (server) => {
    server.use('/account', accountRouter);
    server.use('/upload', uploadRouter);
    server.use('/auth', authenticationRouter);
    server.use('/user', userRouter);
};
