const Web3 = require('web3');

class Wallet {
    constructor(window) {
        this.window = window;
    }
    connectToWeb3() {
        if (this.window.ethereum) {
            this.window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((error) => {
              if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please connect to MetaMask.');
              } else {
                console.error(error);
              }
            });
            this.window.ethereum.autoRefreshOnNetworkChange = false;
            this.window.web3 = new Web3(window.ethereum);
            return this.window.web3;
        }
        else {
            console.log('No Web3 Wallet found on Browser, please install one.')
            return false;
        }
    }
    async getWallet(web3) {
        if (web3 != false) {
            let accounts = await web3.eth.getAccounts();
            if (accounts.length != 0) return accounts[0];
            else return false;
        }
        else return false;
    }
    async initiateWeb3() {
        let web3 = this.connectToWeb3();
        let wallet = await this.getWallet(web3);
        let status;
        if (web3 != false && wallet != false) { status = true; }
        else { status = false; }
        return {
            web3: web3,
            account: wallet,
            status: status,
        }
    }
}
module.exports = Wallet