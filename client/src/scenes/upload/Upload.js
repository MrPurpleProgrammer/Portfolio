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
    function nextButton() {
        let e = location.state;
        let formData = new FormData(document.getElementById("formUploadStep1"));
        formData.append(e.inputName, e.event[0]);
        console.log(formData)
        fetch('http://localhost:5000/upload/create/', {
            mode: 'cors',
            method: 'post',
            body: formData,
        });
        setUploadFormState(UploadFormState + 1)
    }
    const [UploadFormState, setUploadFormState] = useState(0);
    let renderUploadForm = () => {
        if (UploadFormState == 0) {
            return (
                <UploadFormStep1/>
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
    let handlePreviousButton = function(){
        if(UploadFormState != 0 ) {
            return(
                <button className="formSecondaryButton"  onClick={() => {setUploadFormState(UploadFormState - 1)}}><h1>Previous</h1></button>
            )
        }
        else {
            return;
        }
    }
    let handleNextButton = function(){
        if(UploadFormState == 2 ) {
            return(
                <button className="formMainButton" onClick={() => {nextButton()}}><h1>Submit</h1></button>
            )
        }
        else {
            return(
                <button className="formMainButton" onClick={() => {setUploadFormState(UploadFormState + 1)}}><h1>Next</h1></button>
                )
        }
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