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
    async function connectToWallet(type) {
        let web3Instance;
        if (window.ethereum) {
            await window.ethereum.enable();
        }
        if (typeof window.web3 !== 'undefined') {
            web3Instance = new Web3(window.web3.currentProvider);
        }
        else {
            web3Instance = new Web3(new Web3.providers.HttpProvider("ws://localhost:8545"));
        }
        const accounts = await web3Instance.eth.getAccounts((err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
                return res;
            }
        });
        setWalletAccount(accounts[0]);
        return { acc: accounts, web3: web3Instance };
    }
    async function loadBlockchainData(type) {
        let walletData = await connectToWallet(type);
        let netVer = window.web3.currentProvider.networkVersion;
        let web3 = walletData.web3;
        const DMCT = new web3.eth.Contract(DMCTCompile.abi, DMCTCompile.networks[5777].address);
        let assetHash = Buffer.from('Hello DMCT', 'hex');
        const url = "388CD7A0AC2B02";
        //Convert Id into multihash data bytes
        let ipfsCID = new CID('bafybeidsnx4fyxavnmonff7fopzps5lwdbmhcmo7fchiebgddodctcetzy');
        let args = {
            hashFunction: ipfsCID.buffer.slice(0, 4),
            hash: ipfsCID.multihash.slice(4),
        }
        console.log(props.contractMetadata, assetHash, args.hash, args.hashFunction);
        DMCT.methods.createCertificate(props.contractMetadata[0].value, assetHash, args.hash, args.hashFunction)
            .send({ from: walletData.acc[0] })
            .on('transactionHash', function (hash) {
                console.log(hash);
            })
            .on('confirmation', function (confirmationNumber, receipt) {
                console.log(confirmationNumber, receipt);
                $('transactionComplete_'+type).show();
            })
            .on('receipt', function (receipt) {
                console.log(receipt);
            });
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
                            <i id='transactionComplete_metamask' className="fas fa-check none"></i>
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