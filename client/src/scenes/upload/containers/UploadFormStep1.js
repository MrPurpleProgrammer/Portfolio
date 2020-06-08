import React, { Component, useState } from 'react';
import uploadLogo from '../../../assets/SVG/UploadIcon.svg';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';

const getBorderColor = (props) => {
    if (props.isDragActive) {
        return '#ff0051 2px dashed';
    }
    return '#cccccc 2px dashed';
}
const UploadBoxLong = styled.div`
    border: ${props => getBorderColor(props)};
    height: 100px;
    width:100%;
    margin-top: 0px;
    text-align: center;
    color: 
    `;
function UploadFormStep1(props) {
    const history = useHistory();
    const { acceptedFiles,
        getRootProps,
        isDragActive,
        getInputProps,
        open
    } = useDropzone({
        onDrop: (e) => {
            handleUpload(e, "drop");
        },
        onDragEnter: () => { $('.uploadText').html("Submit Evidence") },
        onDragLeave: () => { $('.uploadText').html("Upload Evidence Here") },
    });
    function handleUpload (event, state) {
        if (state == "drop") {
            var eventMod = event;
        }
        else {
            event.preventDefault();
            var eventMod = event.target.files;
        }
        console.log(event);
        let formData = new FormData(document.getElementById("formUploadStep1"));
        formData.append('mediaEvidence', eventMod);
    }
    $(function () {
        $('.checkbox_Style1_Label').on('click', function () {
            $('.checkbox_Style1_Label').removeClass('checkboxActive');
            $(this).parent().find('.checkbox_Style1_Input').prop('checked', true);
            $(this).toggleClass('checkboxActive');
        })
    })
    return (
        <div id="divUploadForm_Step1" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    Its a little more complicated...
                </h1>
                <p>
                    Let me tell you why. Its because you are initiating a smart contract. We create a blockchain certified token,
                    which encodes unique identification data into this file. This will help us track viewership, sharing,
                    and usability of the multimedia item. We create a Digital Multimedia Certification Token (DMCT) on the
                    blockchain. A publicly accessible, fault tolerant, distributed database to show that you are the owner of
                    this media item.
                </p>
            </div>
            <div id="divFormStep_1" className="uploadFormInputContainer">
                <form method="post" name="createCert_Step1" id="formUploadStep1">
                    <div className="uploadFormInput">
                        <label>Title</label>
                        <input id="mediaTitle" name="mediaTitle" type="text" />
                    </div>
                    <div className="uploadFormInput">
                        <label>Tags</label>
                        <input id="mediaTags" name="mediaTags" />
                    </div>
                    <div className="uploadFormInput">
                        <label>Description</label>
                        <textarea id="mediaDescription" name="mediaDescription" className="uploadLongInput"></textarea>
                    </div>
                    <p>Upload Evidence</p>
                    <UploadBoxLong {...getRootProps({ isDragActive, className: "uploadBoxLong" })} >
                        {/* Input names are defined in a dictionary, if you make any changes to the name, make sure to change it in Upload/Dictionary */}
                        <input {...getInputProps()} name="uploadFormEvidence" onChange={(e) => {handleUpload(e)}} />
                        <img src={uploadLogo} />
                        <p className="uploadText">Upload Media Here</p>
                    </UploadBoxLong>
                    <div className="checkbox_Style1">
                        <input type="checkbox" id="storeOptionRecCheck" name="storeInPort" className="checkbox_Style1_Input"/>
                        <label htmlFor="storeOptionRecCheck" className="checkbox_Style1_Label">Store Media in Portfolio Servers (Recommended)</label>
                    </div>
                    <div className="checkbox_Style1">
                        <input type="checkbox" id="box-2" name="storeLocal" className="checkbox_Style1_Input" />
                        <label htmlFor="box-2" className="checkbox_Style1_Label">Store Media in IPFS Only</label>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default UploadFormStep1;