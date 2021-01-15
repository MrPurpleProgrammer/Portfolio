const Wallet = require('./oracles/web3.js/wallet.web3');
const DMCT = require('./oracles/dmct.oracle');
const DMCTABI = require('./oracles/abi/abi.oracle');
const IPFS = require('./oracles/ipfs.oracle');

module.exports = {
    Wallet,
    DMCT,
    DMCTABI,
    IPFS
}
