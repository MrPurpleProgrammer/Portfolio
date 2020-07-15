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
    $(function () {
        $('.checkbox_Style1_Label').on('click', function () {
            $(this).toggleClass('checkboxActive');
            $(this).parent().find('.checkbox_Style1_Input').toggleClass('check')
        })
    })
    $(function () {
        $('.check').on('click', function () {
            $(this).prop('checked', true);
        })
    });
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
            let assetHash = Buffer.from('Hello MrPurple11', 'hex');
            //Convert Id into multihash data bytes
            let ipfsCID = new CID('bafybeidsnx6fy7aannonff7fopzps5lwdbmhcmo7fchiebgddodctcetzy');
            let args = {
                hashFunction: ipfsCID.buffer.slice(0, 4),
                hash: ipfsCID.multihash.slice(4),
            }
            DMCT.handleRevert = true;
            DMCT.methods.createCertificate(props.contractMetadata[0].value, assetHash, args.hash, args.hashFunction)
                .send({ from: accounts[0], gasPrice: 20000000000, gas: 8000000, value: 1000000000000000000 })
                .on('transactionHash', function (hash) {
                    console.log(hash);
                    setWalletStatus('Completed');
                })
                .on('confirmation', function (confirmationNumber, receipt) {
                    console.log(confirmationNumber, receipt);
                    $('transactionComplete_' + type).show();
                })
                .on('receipt', function (receipt) {
                    props.transactionReciept(receipt);
                    console.log(receipt);
                })
                .on('error', function (error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    props.transactionReciept(error);
                    setWalletStatus('Rejected');
                    console.log(error, receipt);
                });
        }
        else { setWalletStatus('Rejected'); return console.log('Web3 Instance Not Found.'); }
    }
    function transactionStatus() {
        if (WalletStatus == 'Pending') return (<p style={{ color: 'gray', marginLeft: 7 }}>Pending</p>)
        if (WalletStatus == 'Connecting') return (<p style={{ color: 'yellow', marginLeft: 7 }}>Connecting</p>)
        if (WalletStatus == 'Connected') return (<p style={{ color: 'orange', marginLeft: 7 }}>Connected</p>)
        if (WalletStatus == 'Completed') return (<p style={{ color: '#14bb2e', marginLeft: 7 }}>Completed</p>)
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
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10" onClick={() => loadBlockchainData('metamask')}>
                            <img src={metamaskSVG}></img>
                            <h1>Connect With Metamask</h1>
                            <div className='walletTransactionStatus'>
                                <p>Transaction Status: </p>
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