const express = require('express')
const accountRouter = require('./account.router');
const uploadRouter = require('./upload.router');
const authenticationRouter = require('./authentication.router');
const userRouter = require('./user.router')
const assetRouter = require('./asset.router')
const ipfsRouter = require('./ipfs.router')
const spiderRouter = require('./spider.router')

module.exports.indexRoutes = (server) => {
    server.use('/account', accountRouter);
    server.use('/upload', uploadRouter);
    server.use('/auth', authenticationRouter);
    server.use('/user', userRouter);
    server.use('/asset', assetRouter);
    server.use('/ipfs', ipfsRouter);
    server.use('/spider', spiderRouter);
};
