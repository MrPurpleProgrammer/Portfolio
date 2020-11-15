import React, { Component, useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileHeader from '../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import $ from 'jquery';
import UploadStatus from './containers/UploadStatus';
import UploadFormStep1 from './containers/UploadFormStep1';
import UploadFormStep2 from './containers/UploadFormStep2';
import UploadFormStep3 from './containers/UploadFormStep3';
import UploadFormStep4 from './containers/UploadFormStep4';
import UploadFormStepLink from './containers/UploadFormStepLink';
import UploadChart from '../../components/PortfolioLibrary/uploadChart/UploadChart.js';
import { isAuthenticatedAccount } from '../../api/auth';
import { getAccount } from '../../api/account';
require('dotenv').config()

function Upload(props) {
    let location = useLocation();
    let history = useHistory();
    const [WalletAccount, setWalletAccount] = useState(null);
    const [Form, setForm] = useState([]);
    const [EvidenceUpload, setEvidenceUpload] = useState(null);
    const [MediaTags, setMediaTags] = useState([])
    const [UploadFormState, setUploadFormState] = useState(0);
    const [WalletTransactionData, setTransactionData] = useState(false);
    const [AssetData, setAssetData] = useState(null);
    const [Account, setAccount] = useState({});
    const [User, setUser] = useState({})
    const authToken = isAuthenticatedAccount().token;
    let getAccountData = () => {
        let accountId = isAuthenticatedAccount().res.account._id;
        let token = isAuthenticatedAccount().token;
        getAccount(token, accountId).then((resp) => {
            setAccount(resp.account);
            setUser(resp.user);
        });
    }
    let getAssetData = () => {
        let fileForm = new FormData();
        fileForm.append('asset', location.state.event[0]);
        let url = process.env.REACT_APP_SERVER_API_URL + 'upload/generate/assetHash';
        fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + authToken
            },
            body: fileForm,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssetData(data);
                if (data.ownershipStatus.status == true) {
                    setUploadFormState(1.5);
                }
                else {
                    setUploadFormState(1);
                }
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
        else if (UploadFormState == 1.5) {
            return (
                <UploadFormStepLink AssetData={AssetData} />
            )
        }
        else if (UploadFormState == 2) {
            return (
                <UploadFormStep3 assetData={AssetData} contractMetadata={Form} transactionReceipt={receipt => setTransactionData(receipt)} submitForm={clickSubmitButton} />
            )
        }
        else if (UploadFormState == 3) {
            return (
                <UploadFormStep4 transactionData={WalletTransactionData} />
            )
        }
        else {
            setUploadFormState(0)
            return (
                <UploadFormStep1 />
            )
        }
    }
    function storageOption() {
        if ($('#storeOptionPort').prop("checked") == true) return { name: "storeOption", value: "PORT" };
        else if ($('#storeOptionIPFS').prop("checked") == true) return { name: "storeOption", value: "IPFS" };
        else return { name: "storeOption", value: null };
    }
    function mediaTags() {
        let tagNodes = $('.tagify__tag');
        let tagArr = [];
        let jsonArr = null;
        if (tagNodes.length > 0) {
            tagNodes.each((i, e) => {
                tagArr.push(e.innerText);
            })
            jsonArr = JSON.stringify(tagArr);
        }
        return { name: "mediaTags", value: jsonArr };
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
            else if (e.name == 'uploadFormEvidence') obj = [];
            else if (e.name == 'walletTransactionStatus') obj = $("#err_" + e.name)
            else obj = $("#err_" + e.name);
            if (obj.length > 0) {
                obj.each((i, elm) => {
                    let elmId = elm.id;
                    if (e.name == 'mediaTags') {
                        let val;
                        if(e.value == null) val = [];
                        else val = JSON.parse(e.value);
                        if (val.length < 3) {
                            let errMsg = $('#' + elmId).attr('data-error');
                            $('#' + obj[0].id).html(errMsg).addClass('inputError');
                            nullCounter++    
                        }
                        else {
                            let normMsg = $('#' + elmId).attr('data-norm');
                            $('#' + elmId).html(normMsg).removeClass('inputError');
                        }
                    }
                    else if (e.value == null || e.value == "") {
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
            return false;
        }
        else {
            return true;
        }
    }
    function setFormArray(step) {
        let e = location.state;
        if (step == 0) {
            let formUpload = $("#formUploadStep1").serializeArray();
            let mediaTagArr = mediaTags();
            formUpload.push(mediaTagArr);
            let thumb = { name: 'thumbnail', value: null };
            if(location.state.thumbnail) thumb = { name: 'thumbnail', value: location.state.thumbnail[0].prefix + location.state.thumbnail[0].data }
            formUpload.push(thumb);
            let storageOpt = storageOption();
            formUpload.push(storageOpt);
            return formUpload;
        }
        if (step == 1) {
            let formUpload = $("#formUploadStep2").serializeArray();
            let termsCheck = termsOption();
            formUpload.push(termsCheck);
            return formUpload;
        }
        if (step == 2) {
            let txValidationObj = JSON.stringify(WalletTransactionData);
            if (WalletTransactionData.status == true) {
                let formUpload = [{ name: 'walletTransactionData', value: txValidationObj }, { name: 'walletTransactionStatus', value: WalletTransactionData.status }];
                formUpload.push({ name: 'toolbarMediaUpload', value: e.event[0] });
                if (EvidenceUpload != null) {
                    EvidenceUpload.value.forEach((each) => {
                        formUpload.push({ name: EvidenceUpload.name, value: each });
                    })
                }
                else formUpload.push({ name: 'uploadFormEvidence', value: null });
                return formUpload;
            }
            else {
                let formUpload = [{ name: 'walletTransactionData', value: txValidationObj }, { name: 'walletTransactionStatus', value: false }];
                return formUpload;
            }
        }
        else { return Form }
    }
    function nextForm() {
        let uploadForm = setFormArray(UploadFormState);
        if (isFormValid(uploadForm) == true) {
            if (UploadFormState == 0) {
                let updatedForm;
                uploadForm.map((each, i) => {
                    Form.push(each);
                    updatedForm = Form;
                });
                setForm(updatedForm);
                getAssetData();
            }
            else {
                let updatedForm;
                uploadForm.map((each, i) => {
                    Form.push(each);
                    updatedForm = Form;
                });
                setForm(updatedForm);
                setUploadFormState(UploadFormState + 1);
            }
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
        $('#submitBtnText').text('Processing...')
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
            let url = process.env.REACT_APP_SERVER_API_URL + 'upload/create/';
            fetch(url, {
                mode: 'cors',
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + authToken
                },
                body: fd,
            }).then(res => {
                if (res.status == 201) setUploadFormState(UploadFormState + 1);
                else {
                    $('#submitBtnText').text('Rejected')
                };
            }).catch(err => {
                console.log(err);
            });
        }
    }
    useEffect(() => {
        getAccountData();
        $(document).keypress(
            function(event){
              if (event.which == '13') {
                $('.formMainButton').click();
                event.preventDefault();
              }
          });
    }, []);
    //Load form navigation buttons based on state
    let handleButtons = function () {
        if (UploadFormState == 1.5) {
            return (
                <div id="divStateButtons" className="formNavButtons">
                    <button className="formSecondaryButton" onClick={backButton}><h1>Cancel</h1></button>
                </div>
            )
        }
        else {
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
                        <button type='button' id='uploadDownloadButton' className="formMainButton" onClick={() => console.log("receipt")}><h1>Download Receipt</h1></button>
                        <button className="formSecondaryButton" onClick={() => { history.push('/refresh'); history.replace('/Account/Profile/' + isAuthenticatedAccount().res.account._id) }}><h1>Complete</h1></button>
                    </div>
                )
            }
        }
    }
    return (
        <div id="accountContent" className="accountContentContainer">
            <ProfileHeader sceneState="account" />
            <div id="divAccountContentHeader" className="accountContentHeader">
                <div id="divAccountDetails" className="accountDetails">
                    <h1 className="accountNameLanding">{User.username}</h1>
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