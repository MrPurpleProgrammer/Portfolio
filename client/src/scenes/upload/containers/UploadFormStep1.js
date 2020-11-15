import React, { useEffect, Component, useState, useRef, useCallback } from 'react';
import uploadLogo from '../../../assets/SVG/UploadIcon.svg';
import fileIcon from '../../../assets/SVG/fileIcon.svg';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IconGenerator from '../../../components/PortfolioLibrary/iconGenerator/IconGenerator'
import Tagify from '@yaireo/tagify'
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

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
    useEffect(() => {
        let inputElm = document.getElementById('mediaTags')
        let mediaTags = new Tagify(inputElm, {
            maxTags: 10,
        });
    }, []);

    const history = useHistory();
    let [evidenceUpload, setEvidenceUpload] = useState(null);
    let tagRef = useRef();
    const [tags, setTags] = useState([])
    const [files, setFiles] = useState([]);
    function deleteThumbnail(id) {
        let modFiles = files;
        let index;
        modFiles.forEach((f, i) => {
            if (f.id == id) { index = i; }
            return;
        })
        modFiles.splice(index, 1);
        if (modFiles.length == 0) $('#divEmptyEvidenceBox').show();
        setFiles(modFiles);
        props.onUpload(modFiles);
        document.getElementById("uploadBoxLong").blur();
    }
    const handleThumbnail = files.map((f) => {
        let filePath = f.file.path;
        let fileExt = filePath.split('.').pop();
        let preview;
        if (fileExt == 'jpeg' || fileExt == 'png' || fileExt == 'jpg' || fileExt == 'svg' || fileExt == 'JPG') {
            preview = f.preview;
            return (
                <div id='' className="thumbNail" key={f.id}>
                    <div className="thumbNailInner">
                        <img
                            src={preview}
                            className="thumbImg"
                        />
                        <i className="fas fa-times-circle pointer" onClick={() => deleteThumbnail(f.id)}></i>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='' className="thumbNail" key={f.id}>
                    <div className="thumbNailInner">
                        <IconGenerator extension={fileExt} class='thumbImg'/>
                        <i className="fas fa-times-circle pointer" onClick={() => deleteThumbnail(f.id)}></i>
                    </div>
                </div>
            )
        }
    });
    const maxEvidenceUploads = 3;
    const {
        acceptedFiles,
        getRootProps,
        isDragActive,
        getInputProps,
        open
    } = useDropzone({
        multiple: true,
        noClick: true,
        onDrop: (e) => {
            let newFiles = files;
            let totalUploadCount = newFiles.length + e.length;
            if (e.length > maxEvidenceUploads || totalUploadCount > maxEvidenceUploads) return console.log('Reached max number of evidence items');
            else {
                if (newFiles.length < maxEvidenceUploads) {
                    e.forEach((file) => {
                        let uuid = uuidv4();
                        newFiles.push(Object.assign(
                            { id: uuid },
                            { file: file },
                            { preview: URL.createObjectURL(file) }
                        ));
                    });
                    handleUpload(e, "drop");
                    if (newFiles.length >= 1) {
                        $('#divEmptyEvidenceBox').hide();
                    }
                    else {
                        $('#divEmptyEvidenceBox').show();
                    }
                }
                else {
                    return console.log('Reached max number of evidence items');
                }
            }
        },
        onDragEnter: () => { $('.uploadText').html("Submit Evidence") },
        onDragLeave: () => { $('.uploadText').html("Drop Evidence Here") },
    });
    function handleUpload(event, state) {
        if (state == "drop") {
            var eventMod = event;
        }
        else {
            event.preventDefault();
            var eventMod = event.target.files;
        }
        props.onUpload(eventMod);
    }
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
                    Its a little more complicated...
                </h1>
                <div>
                    <p>
                        You are about to initiate a smart contract. We create a blockchain certified Digital Multimedia Certification Token (DMCT),
                        which is encoded into this file. This allows Portfolio to track viewership, sharing, and usability of the file, and route it back to the original owner.
                        Utilizing this method, Portfolio streams all the value generated by your file on the internet, to its original creator.
                </p>
                </div>
            </div>
            <div id="divFormStep_1" className="uploadFormInputContainer">
                <form method="post" name="createCert_Step1" id="formUploadStep1">
                    <div className="uploadFormInput">
                        <label id='err_mediaTitle' data-norm='Title' data-error='Enter a valid media title'>Title</label>
                        <input id="mediaTitle" name="mediaTitle" type="text" autoComplete='off' spellCheck='off' />
                    </div>
                    <div className="uploadFormInput">
                        <label id='err_mediaTags' data-norm='Tags' data-error='Enter atleast three tags for reference'>Tags</label>
                        <input id="mediaTags" autoComplete='off' spellCheck='off' />
                    </div>
                    <p id='err_uploadFormEvidence' data-norm='Upload Evidence' data-error='Upload evidence showing you own this media file.'>Upload Evidence</p>
                    <UploadBoxLong id="uploadBoxLong" {...getRootProps({ isDragActive, className: "uploadBoxLong" })} >
                        {/* Input names are defined in a dictionary, if you make any changes to the name, make sure to change it in Upload/Dictionary */}
                        <input {...getInputProps()} name="uploadFormEvidence" id='uploadFormEvidence' onChange={(e) => { handleUpload(e); }} />
                        <div id="divEvidenceThumbnail">
                            <div id="divEmptyEvidenceBox">
                                <img src={uploadLogo} />
                                <p className="uploadText">Drop Evidence Here</p>
                            </div>
                            <aside id='divThumbnailList' className="thumbNailContainer">
                                {handleThumbnail}
                            </aside>
                        </div>
                    </UploadBoxLong>
                    <div className="checkbox_Style1">
                        <input type="checkbox" id="storeOptionPort" name="storeInPort" className="checkbox_Style1_Input" />
                        <label id='err_storeOptionPort' htmlFor="storeOptionRecCheck" className="checkbox_Style1_Label storeOption" data-norm='Store Media in Portfolio Servers and IPFS' data-error='Store Media in Portfolio Servers and IPFS (Pick One)' onClick={handleCheckmark.bind(this)}>Store Media in Portfolio Servers and IPFS</label>
                    </div>
                    <div className="checkbox_Style1">
                        <input type="checkbox" id="storeOptionIPFS" name="storeLocal" className="checkbox_Style1_Input" />
                        <label id='err_storeOptionIpfs' htmlFor="box-2" className="checkbox_Style1_Label storeOption" data-norm='Store Media in IPFS Only' data-error='Store Media in IPFS Only (Pick One)' onClick={handleCheckmark.bind(this)}>Store Media in IPFS Only</label>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default UploadFormStep1;