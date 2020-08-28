import React, { Component, useState } from 'react';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';

function UploadFormStep4(props) {
    function handleCheckmark(e) {
        let o = e.currentTarget;
        $('.checkbox_Style1_Label').removeClass('checkboxActive');
        $(o).parent().find('.checkbox_Style1_Input').prop('checked', true);
        $(o).toggleClass('checkboxActive');
    };
    return (
        <div id="divUploadForm_Step1" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    Treat these documents and passkeys as proof of ownership for this media.
                </h1>
            </div>
            <div id="divFormStep_4" className="uploadFormInputContainer">
                <div className="uploadFormInput">
                    <label>Certificate Identification # </label>
                    <input id="mediaCID" name="mediaCID" type="text" value={props.transactionData.assetId} readOnly/>
                </div>
                <div className="uploadFormInput">
                    <label>Asset Identification #</label>
                    <input id="mediaAID" name="mediaAID" value={props.transactionData.certificateId} readOnly/>
                </div>
                <div className="uploadFormInput">
                    <label>IPFS Gateway URL</label>
                    <input id="mediaIPFSURL" name="mediaIPFSURL" value={props.transactionData.url.string} readOnly/>
                </div>
                <div className="uploadFormInput">
                    <label>Transaction Hash</label>
                    <input id="mediaEtherTransactionHash" name="mediaEtherTransactionHash" value={props.transactionData.txReceipt.transactionHash} readOnly/>
                </div>
                <div className="checkbox_Style1">
                    <input type="checkbox" id="storeOptionRecCheck" className="checkbox_Style1_Input" />
                    <label htmlFor="storeOptionRecCheck" className="checkbox_Style1_Label" onClick={handleCheckmark.bind(this)}>Save this information on Portfolio servers? </label>
                    <p style={{fontSize: 10}}>This means we will save the above passkeys on our servers, allowing us to track ownership and media metadata. However this also means, that if there is a security breach within our servers, you may be subject to property theft. </p>
                </div>
                <div className="checkbox_Style1">
                    <input type="checkbox" id="box-2" className="checkbox_Style1_Input" />
                    <label htmlFor="box-2" className="checkbox_Style1_Label" onClick={handleCheckmark.bind(this)}>Store these passkeys and documents locally by myself.</label>
                    <p style={{fontSize: 10}}>This means it is completely your responsibility to ensure the safety and confidentiality of the following passkeys.</p>
                </div>
            </div>
        </div>
    );
}
export default UploadFormStep4;