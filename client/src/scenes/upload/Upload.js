import React, { Component, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileHeader from '../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import $ from 'jquery';
import DMCTCompile from '../../contracts/DMCT.json';
import Web3 from 'web3';
import UploadStatus from './containers/UploadStatus';
import UploadFormStep1 from './containers/UploadFormStep1';
import UploadFormStep2 from './containers/UploadFormStep2';
import UploadFormStep3 from './containers/UploadFormStep3';
import UploadFormStep4 from './containers/UploadFormStep4';
import UploadChart from '../../components/PortfolioLibrary/uploadChart/UploadChart.js';

function bufferToHexString(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

function Upload(props) {
    let location = useLocation();
    let history = useHistory();
    const [WalletAccount, setWalletAccount] = useState(null);
    const [Form, setForm] = useState([]);
    const [EvidenceUpload, setEvidenceUpload] = useState(null);
    const [MediaTags, setMediaTags] = useState([])
    const [UploadFormState, setUploadFormState] = useState(0);
    const [WalletTransactionData, setTransactionData] = useState(null);
    const [AssetData, setAssetData] = useState(null);
    let getAssetData = () => {
        let fileForm = new FormData();
        fileForm.append('asset', location.state.event[0]);
        let url = 'http://localhost:5000/upload/generate/assetHash';
        fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: fileForm,
        })
            .then(res => res.json())
            .then(data => {
                setAssetData(data);
            })
            .catch(err => console.log(err));
    }
    let backButton = () => {
        return history.goBack();
    }
    let handleEvidenceUpload = (e) => {
        setEvidenceUpload({ name: 'uploadFormEvidence', value: e });
    }

    let renderUploadForm = () => {
        if (UploadFormState == 0) {
            return (
                <UploadFormStep1 onUpload={handleEvidenceUpload} mediaTags={tags => setMediaTags(tags)} />
            )
        }
        else if (UploadFormState == 1) {
            return (
                <UploadFormStep2 />
            )
        }
        else if (UploadFormState == 2) {
            return (
                <UploadFormStep3 assetData={AssetData} contractMetadata={Form} transactionReciept={reciept => setTransactionData(reciept)} submitForm={clickSubmitButton}/>
            )
        }
        else if (UploadFormState == 3) {
            return (
                <UploadFormStep4 transactionData={WalletTransactionData}/>
            )
        }
        else {
            setUploadFormState(0)
            return (
                <UploadFormStep1 />
            )
        }
    }
    // Next Button Functionality
    function storageOption() {
        if ($('#storeOptionPort').prop("checked") == true) return { name: "storeOption", value: "PORT" };
        else if ($('#storeOptionIPFS').prop("checked") == true) return { name: "storeOption", value: "IPFS" };
        else return { name: "storeOption", value: null };
    }
    function mediaTags() {
        let tagNodes = $('.tagify__tag');
        let tagArr = null;
        if (tagNodes.length > 0) {
            tagArr = [];
            tagNodes.each((i, e) => {
                tagArr.push(e.innerText);
            })
        }
        return { name: "mediaTags", value: tagArr };
    }
    function termsOption() {
        if ($('#termAgreeCheck').prop("checked") == true) {
            return { name: "termAgreeOption", value: "true" }
        }
        else return { name: "termAgreeOption", value: null };
    }
    let isFormValid = (formArray) => {
        console.log(formArray);
        let nullCounter = 0;
        formArray.forEach((e) => {
            let obj;
            if (e.name == 'storeOption') obj = $('.storeOption');
            else if (e.name == 'walletTransactionStatus') obj = $("#err_" + e.name)
            else obj = $("#err_" + e.name);
            if (obj.length > 0) {
                obj.each((i, elm) => {
                    let elmId = elm.id;
                    if (e.value == null || e.value == "") {
                        let errMsg = $('#' + elmId).attr('data-error');
                        $('#' + elmId).html(errMsg).addClass('inputError');
                        nullCounter++
                    }
                    else {
                        let normMsg = $('#' + elmId).attr('data-norm');
                        $('#' + elmId).html(normMsg).removeClass('inputError');
                    }
                });
            }
        })
        if (nullCounter > 0) {
            //$('#uploadFormNextButton').addClass('disableClick');
            return false;
        }
        else {
            //$('#uploadFormNextButton').removeClass('disableClick');
            return true;
        }
    }
    function setFormArray(step) {
        if (step == 0) {
            let e = location.state;
            getAssetData();
            let formUpload = $("#formUploadStep1").serializeArray();
            let mediaTagArr = mediaTags();
            formUpload.push(mediaTagArr);
            let storageOpt = storageOption();
            formUpload.push(storageOpt);
            formUpload.push({ name: 'toolbarMediaUpload', value: e.event[0] });
            if (EvidenceUpload != null) {
                EvidenceUpload.value.forEach((each) => {
                    formUpload.push({ name: EvidenceUpload.name, value: each });
                })
            }
            else formUpload.push({ name: 'uploadFormEvidence', value: null });
            return formUpload;
        }
        if (step == 1) {
            let formUpload = $("#formUploadStep2").serializeArray();
            let termsCheck = termsOption();
            formUpload.push(termsCheck);
            return formUpload;
        }
        if (step == 2) {
            if(WalletTransactionData.status == 'Accepted') {
                let formUpload = [{ name: 'walletTransactionData', value: WalletTransactionData }, { name: 'walletTransactionStatus', value: WalletTransactionData.status }];
                return formUpload;
            }
            else {
                let formUpload = [{ name: 'walletTransactionData', value: WalletTransactionData }, { name: 'walletTransactionStatus', value: null }];
                return formUpload;
            }
        }
        else { return Form }
    }
    function nextForm() {
        let uploadForm = setFormArray(UploadFormState);
        if (isFormValid(uploadForm) == true) {
            let updatedForm;
            uploadForm.map((each, i) => {
                Form.push(each);
                updatedForm = Form;
            });
            setForm(updatedForm);
            setUploadFormState(UploadFormState + 1);
        }
        console.log(Form, UploadFormState);
    }
    let clickSubmitButton = (e) => {
        $('#submitBtnText').text('Processing...')
        console.log(e);
        document.getElementById('uploadFormSubmitButton').click();
    }
    // Submit Form Button Functionality
    function submitFormData() {
        let uploadForm = setFormArray(UploadFormState);
        if (isFormValid(uploadForm) == true) {
            let fd = new FormData();
            let updatedForm;
            uploadForm.map((each, i) => {
                Form.push(each);
                updatedForm = Form;
            });
            setForm(updatedForm);
            updatedForm.forEach((e) => {
                fd.append(e.name, e.value);
            });
            let url = 'http://localhost:5000/upload/create/';
            fetch(url, {
                mode: 'cors',
                method: 'post',
                body: fd,
            }).then(res => {
                if (res.status == 201) setUploadFormState(UploadFormState + 1);
            });
        }
    }
    //Load form navigation buttons based on state
    let handleButtons = function () {
        if (UploadFormState == 2) {
            return (
                <div id="divStateButtons" className="formNavButtons">
                    <button type='button' id='uploadFormSubmitButton' className="formMainButton" onClick={() => { submitFormData() }}><h1 id='submitBtnText'>Submit</h1></button>
                    <button className="formSecondaryButton" onClick={backButton}><h1>Cancel</h1></button>
                </div>
            )
        }
        else if (UploadFormState < 2) {
            return (
                <div id="divStateButtons" className="formNavButtons">
                    <button type='button' id='uploadFormNextButton' className="formMainButton" onClick={() => { nextForm() }}><h1>Next</h1></button>
                    <button className="formSecondaryButton" onClick={backButton}><h1>Cancel</h1></button>
                </div>
            )
        }
        else {
            return (
                <div id="divStateButtons" className="formNavButtons">
                    <button type='button' id='uploadDownloadButton' className="formMainButton" onClick={() => console.log("reciept")}><h1>Download Reciept</h1></button>
                    <button className="formSecondaryButton" onClick={() => history.push('/')}><h1>Complete</h1></button>
                </div>
            )
        }
    }
    return (
        <div id="accountContent" className="accountContentContainer">
            <ProfileHeader sceneState="account" />
            <div id="divAccountContentHeader" className="accountContentHeader">
                <div id="divAccountDetails" className="accountDetails">
                    <h1 className="accountNameLanding">Aditya Sayyaparaju</h1>
                    <div id="divAccountMetrics" className="metricsContainer">
                        <div id="divAccountBadges" className="accountBadges">
                            <i className="fas fa-award"></i>
                            <p>326</p>
                            <i className="fas fa-clone"></i>
                            <p>5,489</p>
                            <i className="fas fa-download"></i>
                            <p>1,289,762</p>
                            <i className="fas fa-thumbs-up"></i>
                            <p>570,870</p>
                            <i className="fas fa-star"></i>
                            <p>34,000</p>
                            <i className="fas fa-comment"></i>
                            <p>23,489</p>
                            <i className="fas fa-users"></i>
                            <p>5,600</p>
                        </div>
                        <div id="divUploadAnalytics" className="uploadAnalytics">
                            <UploadChart />
                        </div>
                    </div>
                </div>
            </div>
            <div id="divAccountToolbar" className="accountToolbar uploadFormParent">
                <div id="divUploadFormHeader" className="uploadHeader">
                    <div className="closeView uploadClose" onClick={backButton}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="accountToolBarHeader fitContent">
                        <p>Toolbar</p>
                        <i className="fas fa-angle-double-down"></i>
                    </div>
                </div>
                <div id="divUploadFormContent" className="uploadContainer">
                    <div id="divUploadStatusTracker" className="uploadStatusContainer">
                        <UploadStatus />
                    </div>
                    <div id="divUploadForm" className="uploadFormContainer">
                        {renderUploadForm()}
                        <div id="divButtonContainer" className="uploadButtonContainer">
                            {handleButtons()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Upload;