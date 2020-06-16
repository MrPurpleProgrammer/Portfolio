import React, { Component, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useHistory, useLocation } from 'react-router-dom';
import ProfileHeader from '../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import $ from 'jquery';
import UploadStatus from './containers/UploadStatus';
import UploadFormStep1 from './containers/UploadFormStep1';
import UploadFormStep2 from './containers/UploadFormStep2';
import UploadFormStep3 from './containers/UploadFormStep3';
import UploadFormStep4 from './containers/UploadFormStep4';

function Upload(props) {
    let location = useLocation();
    let history = useHistory();
    let backButton = () => {
        return history.goBack();
    }
    const [Form, setForm] = useState([]);
    const [EvidenceUpload, setEvidenceUpload] = useState(null);
    const [UploadFormState, setUploadFormState] = useState(0);
    let handleEvidenceUpload = (e) => {
        console.log(e);
        setEvidenceUpload({name: 'uploadFormEvidence', value: e[0] });
    }
    function storageOption() {
        if($('#storeOptionPort').prop( "checked" ) == true) return   {name: "storeOption", value: "PORT"};
        else if($('#storeOptionIPFS').prop( "checked" ) == true) return {name: "storeOption",value: "IPFS"};
        else return {name: "storeOption", value: "IPFS"};
    } 
    function nextButton() {
        console.log(UploadFormState);
        if (UploadFormState == 0) {
            let e = location.state;
            let formUpload1 = $("#formUploadStep1").serializeArray();
            let storageOpt = storageOption();
            formUpload1.push(storageOpt);
            formUpload1.push({name: e.inputName, value: e.event[0]});
            formUpload1.push(EvidenceUpload);
            setForm(formUpload1);
            setUploadFormState(UploadFormState + 1);
            console.log(Form);
        }
        if (UploadFormState == 1) {
            let formUpload2 = $("#formUploadStep2").serializeArray();
            let termCheck = function() {
                if($('#termsAgreeCheck').prop( "checked" ) == true) return {name: "termAgree", value: "true" }
                else return {name: "termAgree", value: "false" };
            }
            formUpload2.push(termCheck());
            let updatedForm2 = formUpload2.map((e,i) => {
                Form.push(e);
                return Form
            });
            setForm(updatedForm2);
            let fd = new FormData();
            Form.map((e, i) => {
                fd.append(e.name, e.value);
            })
            fetch('http://localhost:5000/upload/create/', {
                mode: 'cors',
                method: 'post',
                body: fd,
            }).then(res => {
                if(res.status == 201) setUploadFormState(UploadFormState + 1);
                console.log(res);
            });
        }
        console.log(Form);
    }
    let renderUploadForm = () => {
        if (UploadFormState == 0) {
            return (
                <UploadFormStep1 onUpload={handleEvidenceUpload}/>
            )
        }
        else if (UploadFormState == 1) {
            return (
                <UploadFormStep2 />
            )
        }
        else if (UploadFormState == 2) {
            return (
                <UploadFormStep3 />
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
    let handlePreviousButton = function () {
        if (UploadFormState != 0) {
            return (
                <button className="formSecondaryButton" onClick={() => { setUploadFormState(UploadFormState - 1) }}><h1>Previous</h1></button>
            )
        }
        else {
            return;
        }
    }
    let handleNextButton = function () {
        return (
            <button className="formMainButton" onClick={() => {nextButton()}}><h1>Submit</h1></button>
        )
    }
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="fade"
        >
            <div id="accountContent" className="accountContentContainer">
                <ProfileHeader sceneState="account" />
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
                                <div id="divShareButtons" className="formNavButtons">
                                    {handlePreviousButton()}
                                    {handleNextButton()}
                                    <button className="formSecondaryButton" onClick={backButton}><h1>Cancel</h1></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}
export default Upload;