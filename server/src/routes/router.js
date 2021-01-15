const express = require('express')
const accountRouter = require('./account.router');
const uploadRouter = require('./upload.router');
const authenticationRouter = require('./authentication.router');
const userRouter = require('./user.router')
const assetRouter = require('./asset.router')
const ipfsRouter = require('./ipfs.router')
const spiderRouter = require('./spider.router')
const router = require('express').Router();

module.exports.indexRoutes = (server) => {
    server.use('/api/account', accountRouter);
    server.use('/api/upload', uploadRouter);
    server.use('/api/auth', authenticationRouter);
    server.use('/api/user', userRouter);
    server.use('/api/asset', assetRouter);
    server.use('/api/ipfs', ipfsRouter);
    server.use('/api/spider', spiderRouter);
};
