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
const UploadBox = styled.div`
    border: ${props => getBorderColor(props)};
    height: 170px;width: 190px;
    margin-top: 0px;
    text-align: center;
    color: 
    `;

function UploadInput(props) {
    const history = useHistory();
    const [isUploadActive, setUploadStatus] = useState(false);
    let handleUpload = (e, state) => {
        if (state == "drop") {
            var eventMod = e;
        }
        else {
            e.preventDefault();
            var eventMod = e.target.files;
        }
        console.log(eventMod);
        history.push(
            {
                pathname: '/Upload',
                search: "?mediaType=jpeg&uploadStatus=true",
                state: { event: eventMod, inputName: eventMod[0].name }
            }
        )
    }
    const { acceptedFiles,
        getRootProps,
        isDragActive,
        getInputProps,
        open,
    } = useDropzone({
        onDrop: (e) => {
            handleUpload(e, "drop");
        },
        onDragEnter: () => { $('.uploadText').html("Initiate Upload Form") },
        onDragLeave: () => { $('.uploadText').html("Upload Media Here") },
    });
    return (
        <div>
            <div className="toolTitle">
                <p>Add to your Portfolio</p>
                <i className="fas fa-chevron-down"></i>
            </div>
            <UploadBox {...getRootProps({ isDragActive, className: "uploadBox" })} >
                {/* Input names are defined in a dictionary, if you make any changes to the name, make sure to change it in Upload/Dictionary */}
                <input {...getInputProps()} name="toolbarMediaUpload" onChange={(e)=> {handleUpload(e)}} />
                <img src={uploadLogo} />
                <p className="uploadText">Upload Media Here</p>
            </UploadBox>
            <button className="uploadToolText" onClick={open}>Browse Folder</button>
        </div>
    );
}
export default UploadInput;