const { Wallet } = require('./web3.js/wallet.web3')
const ABIOracle = require('./abi/abi.oracle');
const GANACHE_NETWORK_ID = 5777;

class DMCT {
    constructor(web3, account) {
        this.web3 = web3;
        this.wallet = account;
        this.DMCT = this.initiateDMCT();
        this.DMCTServices = this.initiateDMCTServices();
    }

    initiateDMCT() {
        if (this.web3 != false && this.wallet.length != 0) {
            let DMCT = new web3.eth.Contract(ABIOracle.DMCT.abi, ABIOracle.DMCT.networks[GANACHE_NETWORK_ID].address);
            DMCT.handleRevert = true;
            return DMCT;
        }
        else return false;
    }

    initiateDMCTServices() {
        if (this.web3 != false && this.wallet.length != 0) {
            let DMCTServices = new web3.eth.Contract(ABIOracle.DMCTServices.abi, ABIOracle.DMCTServices.networks[GANACHE_NETWORK_ID].address);
            DMCTServices.handleRevert = true;
            return DMCTServices;
        }
        else return false;
    }

    async getRevertReason(txHash) {
        const tx = await web3.eth.getTransaction(txHash)
        var result = await web3.eth.call(tx, tx.blockNumber)
        result = result.startsWith('0x') ? result : `0x${result}`
        if (result && result.substr(138)) {
            const reason = web3.utils.toAscii(result.substr(138))
            console.log('Revert reason:', reason)
            return reason
        } else {
            console.log('Cannot get reason - No return value')
        }
    }

    async createCertificate(title, assetHash, urlHash, urlHashFunction) {
        return new Promise((resolve, reject) => {
            let txValidation = {
                title: title,
                assetHash: assetHash,
                url: { hash: urlHash, hashFunction: urlHashFunction },
                transactionHash: null,
                txReceipt: null,
                certificateId: null,
                assetId: null,
                status: null,
            }
            let assetHashBuff = Buffer.from(assetHash, 'hex');
            this.DMCT.methods.createCertificate(title, assetHashBuff, urlHash, urlHashFunction)
                .send({ from: this.wallet, gasPrice: 20000000000, gas: 8000000 })
                .on('transactionHash', function (txHash) {
                    txValidation.transactionHash = txHash;
                    console.log(txHash);
                })
                .on('receipt', function (receipt) {
                    txValidation.txReceipt = receipt;
                    txValidation.certificateId = receipt.events.ReturnCreateCertificate.returnValues.CID;
                    txValidation.assetId = receipt.events.ReturnCreateCertificate.returnValues.AID;
                    txValidation.status = true;
                    resolve(txValidation);
                })
                .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    txValidation.txReceipt = receipt;
                    txValidation.status = false;
                    console.log(error);
                    resolve(txValidation)
                });
        });
    }
}

module.exports = DMCT


