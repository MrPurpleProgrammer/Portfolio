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
    const [UploadFormState, setUploadFormState] = useState(0);
    const [WalletTransactionData, setTransactionData] = useState({});
    const [AssetData, setAssetData] = useState({});
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

    let handleEvidenceUpload = (e) => {
        setEvidenceUpload({ name: 'uploadFormEvidence', value: e });
    }
    function storageOption() {
        if ($('#storeOptionPort').prop("checked") == true) return { name: "storeOption", value: "PORT" };
        else if ($('#storeOptionIPFS').prop("checked") == true) return { name: "storeOption", value: "IPFS" };
        else return { name: "storeOption", value: "IPFS" };
    }
    let backButton = () => {
        return history.goBack();
    }
    let renderUploadForm = () => {
        if (UploadFormState == 0) {
            return (
                <UploadFormStep1 onUpload={handleEvidenceUpload} />
            )
        }
        else if (UploadFormState == 1) {
            return (
                <UploadFormStep2 />
            )
        }
        else if (UploadFormState == 2) {
            return (
                <UploadFormStep3 assetData={AssetData} contractMetadata={Form} transactionReciept={reciept => setTransactionData(reciept)} />
            )
        }
        else if (UploadFormState == 3) {
            return (
                <UploadFormStep4 />
            )
        }
        else {
            setUploadFormState(0)
            return (
                <UploadFormStep1 />
            )
        }
    }
    function nextButton() {
        if (UploadFormState == 0) {
            let e = location.state;
            let formUpload = $("#formUploadStep1").serializeArray();
            let storageOpt = storageOption();
            formUpload.push(storageOpt);
            formUpload.push({ name: 'toolbarMediaUpload', value: e.event[0] });
            EvidenceUpload.value.forEach((e) => {
                formUpload.push({ name: EvidenceUpload.name, value: e });
            })
            setForm(formUpload);
            setUploadFormState(UploadFormState + 1);
        }
        if (UploadFormState == 1) {
            let formUpload = $("#formUploadStep2").serializeArray();
            let termCheck = function () {
                if ($('#termsAgreeCheck').prop("checked") == true) {
                    return { name: "termAgree", value: "true" }
                }
                else return { name: "termAgree", value: "false" };
            }
            formUpload.push(termCheck());
            let updatedForm;
            formUpload.map((each, i) => {
                Form.push(each);
                updatedForm = Form;
            });
            setForm(updatedForm);
            getAssetData();
            setUploadFormState(UploadFormState + 1);
        }
        if (UploadFormState == 2) {
            console.log(WalletTransactionData);
            let fd = new FormData();
            Form.forEach((e) => {
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
        if (UploadFormState == 3) {
            setUploadFormState(0);
        }
        console.log(Form, UploadFormState);
    }
    let handleNextButton = function () {
        return (
            <button id='uploadFormNextButton' className="formMainButton" onClick={() => { nextButton() }}><h1>Next</h1></button>
        )
    }
    let handlePreviousButton = function () {
        if (UploadFormState != 0 && UploadFormState != 3) {
            return (
                <button className="formSecondaryButton" onClick={() => { setUploadFormState(UploadFormState - 1) }}><h1>Previous</h1></button>
            )
        }
        else {
            return;
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
                            <div id="divStateButtons" className="formNavButtons">
                                {handlePreviousButton()}
                                {handleNextButton()}
                                <button className="formSecondaryButton" onClick={backButton}><h1>Cancel</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Upload;