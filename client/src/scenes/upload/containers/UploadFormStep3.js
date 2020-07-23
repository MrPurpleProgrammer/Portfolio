import React, { Component, useState } from 'react';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import DMCTCompile from '../../../contracts/DMCT.json';
import Web3 from 'web3';
import CID from 'cids';
import ledgerSVG from '../../../assets/SVG/ledger-new-logo-.svg'
import metamaskSVG from '../../../assets/SVG/metamask.svg'
import trezorSVG from '../../../assets/SVG/trezor.svg'

function UploadFormStep3(props) {
    const [WalletAccount, setWalletAccount] = useState(null);
    const [WalletStatus, setWalletStatus] = useState('Pending');
    async function connectToWeb3(type) {
        if (window.ethereum) {
            window.ethereum.enable();
            window.ethereum.autoRefreshOnNetworkChange = false;
            window.web3 = new Web3(window.ethereum);
            return window.web3;
        }
        return false;
    }
    async function loadBlockchainData(type) {
        setWalletStatus('Connecting');
        let web3 = await connectToWeb3(type);
        const accounts = await web3.eth.getAccounts((err, res) => {
            if (err) {
                console.log(err);
                setWalletStatus('Rejected');
            }
            else {
                console.log(res);
                return res;
            }
        });
        if (web3 != false && accounts.length != 0) {
            setWalletAccount(accounts[0]);
            setWalletStatus('Connected');
            let netVer = web3.currentProvider.networkVersion;
            //web3.eth.Contract.handleRevert = true;
            const DMCT = new web3.eth.Contract(DMCTCompile.abi, DMCTCompile.networks[5777].address);
            let assetHash = Buffer.from(props.assetData.dhash.str, 'hex');
            //Convert Id into multihash data bytes
            let assetUrl = props.assetData.url;
            let ipfsCID = new CID(assetUrl);
            let urlArgs = {
                hashFunction: ipfsCID.buffer.slice(0, 4),
                hash: ipfsCID.multihash.slice(4),
            }
            DMCT.handleRevert = true;
            DMCT.methods.createCertificate(props.contractMetadata[0].value, assetHash, urlArgs.hash, urlArgs.hashFunction)
                .send({ from: accounts[0], gasPrice: 20000000000, gas: 8000000 })
                .on('receipt', function (receipt) {
                    setWalletStatus('Accepted');
                    let txValidation = {
                        title: props.contractMetadata[0].value,
                        assetHash: assetHash,
                        url: assetUrl,
                        txReciept: receipt,
                        status: 'Accepted',
                    }
                    props.transactionReciept(txValidation);
                    props.submitForm(txValidation);
                    console.log(receipt);
                })
                .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    setWalletStatus('Rejected');
                    let txValidation = {
                        title: props.contractMetadata[0].value,
                        assetHash: assetHash,
                        ipfs: urlArgs,
                        txReciept: receipt,
                        status: 'Rejected',
                    }
                    props.transactionReciept(txValidation);
                    console.log(error, receipt);
                });
        }
        else { setWalletStatus('Rejected'); return console.log('Web3 Instance Not Found.'); }
    }
    function transactionStatus() {
        if (WalletStatus == 'Pending') return (<p style={{ color: 'gray', marginLeft: 7 }}>Pending</p>)
        if (WalletStatus == 'Connecting') return (<p style={{ color: 'yellow', marginLeft: 7 }}>Connecting</p>)
        if (WalletStatus == 'Connected') return (<p style={{ color: 'orange', marginLeft: 7 }}>Connected</p>)
        if (WalletStatus == 'Accepted') return (<p style={{ color: '#14bb2e', marginLeft: 7 }}>Accepted</p>)
        if (WalletStatus == 'Rejected') return (<p style={{ color: '#cb3030', marginLeft: 7 }}>Rejected</p>)
    }
    return (
        <div id="divUploadForm_Step1" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    Connect to a Wallet...
                </h1>
                <p>
                    To complete this process, connect to a Web3 wallet. Once we connect to your account, the smart contract will generate a DMCT token certifying you are the owner of this media file. You will be required to pay a fee ($3 ~ $5), to process this transaction onto the blockchain. However understand, that this process signifies that you are the owner of both the media file and the token. Portfolio cannot claim ownership rights and or usage of this token.
                </p>
            </div>
            <div id="divFormStep_3" className="uploadFormInputContainer">
                <div id="divAltLoginInputs" style={{ display: 'block', height: 'fit-content' }}>
                    <h3 id='err_walletTransactionStatus' style={{marginTop: 0}} data-norm='Wallet Options' data-error='Something went wrong, try again.'>Wallet Options</h3>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10" onClick={() => loadBlockchainData('metamask')}>
                            <img src={metamaskSVG}></img>
                            <h1>Connect With Metamask</h1>
                            <div className='walletTransactionStatus'>
                                <p style={{fontSize: 12}}>Transaction Status: </p>
                                {transactionStatus()}
                            </div>
                        </button>
                    </div>
                    {/* <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Dapper</h1>
                            <p></p>
                        </button>
                    </div>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Ledger Wallet</h1>
                        </button>
                    </div>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Trezor Wallet</h1>
                        </button>
                    </div>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Keystore File</h1>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default UploadFormStep3;