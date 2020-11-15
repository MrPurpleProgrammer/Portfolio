import React, { Component, useState } from 'react';
import CID from 'cids';
import ledgerSVG from '../../../assets/SVG/ledger-new-logo-.svg'
import metamaskSVG from '../../../assets/SVG/metamask.svg'
import trezorSVG from '../../../assets/SVG/trezor.svg'
const { Wallet, DMCT } = require('portfolio_dmct');

function UploadFormStep3(props) {
    const [WalletAccount, setWalletAccount] = useState(null);
    const [WalletStatus, setWalletStatus] = useState('Pending');
    async function initiateWallet() {
        setWalletStatus('Connecting');
        let wallet = new Wallet(window);
        let web3 = await wallet.initiateWeb3();
        return web3;
    }
    async function initiateDMCTContract(type) {
        try {
            let wallet = await initiateWallet();
            if (wallet.status == true) {
                setWalletAccount(wallet.account);
                setWalletStatus('Connected');
                const DMCTOracle = new DMCT(wallet.web3, wallet.account);
                let assetHash = props.assetData.phash.str;
                //Convert Id into multihash data bytes
                let assetUrl = props.assetData.url;
                let ipfsCID = new CID(assetUrl);
                let urlArgs = {
                    hashFunction: ipfsCID.buffer.slice(0, 4),
                    hash: ipfsCID.multihash.slice(4),
                }
                let txObj = await DMCTOracle.createCertificate(props.contractMetadata[0].value, assetHash, urlArgs.hash, urlArgs.hashFunction);
                txObj.url.string = assetUrl;
                console.log(txObj);
                props.transactionReceipt(txObj);
                if (txObj.status == true) {
                    setWalletStatus('Accepted');
                    props.submitForm(txObj)
                }
                else if (typeof txObj != 'undefined' || txObj.status == false) {
                    // let revertReason = await DMCTOracle.getRevertReason(txObj.txReceipt.transactionHash);
                    setWalletStatus('Rejected');
                }
                else {
                    setWalletStatus('Rejected');
                }
            }
            else setWalletStatus('Rejected');
        }
        catch(err) {
            console.log(err)
            setWalletStatus('Rejected')
        }
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
                    <h3 id='err_walletTransactionStatus' style={{ marginTop: 0 }} data-norm='Wallet Options' data-error='Something went wrong, try again.'>Wallet Options</h3>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10" onClick={() => { initiateDMCTContract('metamask') }}>
                            <img src={metamaskSVG}></img>
                            <h1>Connect With Metamask</h1>
                            <div className='walletTransactionStatus'>
                                <p style={{ fontSize: 12 }}>Transaction Status: </p>
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