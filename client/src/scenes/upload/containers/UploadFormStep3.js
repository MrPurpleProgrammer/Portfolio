import React, { Component, useState } from 'react';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';

function UploadFormStep3(props) {
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
    })
    return (
        <div id="divUploadForm_Step1" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    It costs money...
                </h1>
                <p>
                    Let me tell you why. Its because you are initiating a smart contract to create a DMCT token on the blockchain. To insert anything into the blockchain you need to pay network fees for storing data into this publicly accessible fault tolerant database. Meaning anyone and everyone has access to the confirm ownership of these media and the can track its token transaction history.  Track and control usage and distribution of media on the internet, and claim more value through a new type of token economics.
                </p>
            </div>
            <div id="divFormStep_3" className="uploadFormInputContainer">
                <div className="uploadFormInput">
                    <label>Confirm with Account Password:</label>
                    <input id="mediaTitle" name="mediaTitle" type="text" />
                </div>
                <div id="divAltLoginInputs" style={{ display: 'block', height: 'fit-content' }}>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Dapper</h1>
                            <p></p>
                        </button>
                    </div>
                    <div className="altbuttonContainer_Style1">
                        <button id="btnAltLogin" className="altLoginButton_Style1 mt10">
                            <h1>Connect With Metamask</h1>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UploadFormStep3;