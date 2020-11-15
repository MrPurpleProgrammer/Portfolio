import React, { Component, useState } from 'react';
import $ from 'jquery';
import Media from '../../../components/VarsunLibrary/media/Media'
import { Redirect, useHistory } from 'react-router-dom';

function UploadFormStepLink(props) {
    let history = useHistory();
    let handleLink = () => {
        let url = "/Media/Link/" + props.AssetData.ownershipStatus.assetHashDir[0].mediaUrl;
        history.push(url);
    }
    let handleLicence = () => {}
    let linkStatus = () => {
        if (props.AssetData.ownershipStatus.assetHashDir[0].HammingDistance > 0) {
            return (
                <div className="dupAttrButtons">
                    <button type='button' className="dupAttrButtons_main" onClick={handleLink}><p>Link Certificate</p></button>
                    <button className="dupAttrButtons_secondary"><p>Request License</p></button>
                </div>
            );
        }
        else {
            return (
                <div className="dupAttrButtons">
                    <button style={{ marginLeft: "5px" }} className="dupAttrButtons_secondary" onClick={handleLink}><p>Link Certificate</p></button>
                </div>
            );
        } 
    }
    return (
        <div id="divUploadForm_Step1" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    This media is not unique...
                </h1>
                <p>
                    You seem to be uploading a media file someone already owns. If you are modifying or transforming the media file for a unique purpose, you need either link the DMCT to your media upload, or request a license from the original owner for further compensation and ownership rights.
                </p>
            </div>
            <div className="altbuttonContainer_Style1">
                <div id="btnAltLogin" className="altHighlightDiv_Style1 mt10">
                    <div style={{ width: "40%", float: "left" }}>
                        <div id="divUploadStatusTracker">
                            <div id="divMediaSource" className="mediaUploadView">
                                <Media
                                    mediaType={'Image'}
                                    src={'https://ipfs.io/ipfs/' + props.AssetData.ownershipStatus.assetHashDir[0].mediaUrl}
                                    format='upload'
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ float: "left", width: "55%", paddingLeft: "20px" }}>
                        <div className='highlightDivText'>
                            <div className="highlightDivParagraph">
                                <h1>{props.AssetData.ownershipStatus.assetHashDir[0].mediaTitle}</h1>
                                <div style={{ width: "85%" }}>
                                    <div className="dupAttr uploadFormInput">
                                        <p>Media Owner:</p>
                                        <input value={props.AssetData.ownershipStatus.assetHashDir[0].username} readOnly />
                                    </div>
                                    <div className="dupAttr uploadFormInput">
                                        <p>Certificate ID:</p>
                                        <input className="" value={props.AssetData.ownershipStatus.assetHashDir[0].certificateId} readOnly />
                                    </div>
                                </div>
                            </div>
                            {linkStatus()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UploadFormStepLink;