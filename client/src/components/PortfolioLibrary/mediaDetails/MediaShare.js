import React, { useState, Component } from "react";
import $ from 'jquery';

function MediaShare(props) {
    let toggleShareState = (state) => {
        if (state == true) {
            props.toggleState(false)
            $('.shareButton').html("<h1 style='color: white'>Share</h1>");
            return;
        }
        else if (state == false) {
            props.toggleState(true);
            $('.shareButton').html("<i class='fas fa-times' style='color: white' aria-hidden='true'></i>");
            return
        }
    }
    return (
        <div className="mediaShare_Section section">
            <div id="divMediaTitle" className="mediaTitle">
                <h1>{props.location.state.mediaTitle}</h1>
            </div>
            <div id="divMediaTags">
                <div className="tagContainer">
                    {props.tagList}
                </div>
            </div>
            <div id="divMediaShare">
                <h1 className="mediaHeader">Share Media</h1>
                <div className="RadioOption ResOption">
                    <div className="RadioOption_Inner ResFilter" style={{ backgroundColor: '#ff004f' }}></div>
                    <div className="RadioOption_Text">
                        <h1>High Resolution</h1>
                        <p>Download or share the highest resolution available for this media item.</p>
                    </div>
                </div>
                <div className="RadioOption ResOption">
                    <div className="RadioOption_Inner ResFilter"></div>
                    <div className="RadioOption_Text">
                        <h1>Low Resolution</h1>
                        <p>Utilize the most optimal resolution size available for this media item.</p>
                    </div>
                </div>
                <div id="divShareButtons" className="mediaShareButtons">
                    <button className="shareButton" onClick={toggleShareState(true)}><h1>Share</h1></button>
                    <button className="downloadButton"><h1>Download</h1></button>
                </div>
            </div>
            <div id="divMediaAnnotations" className="mediaAnnotations">
                <div className="annotation">
                    <h1>Certificate ID:</h1>
                    <p>{props.location.state.certificateId}</p>
                </div>
                <div className="annotation">
                    <h1>Transaction Hash:</h1>
                    <p>{props.location.state.transactionHash}</p>
                </div>
            </div>
        </div>
    )
}

export default MediaShare