import React, { Component } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import $ from 'jquery';
import UploadChart from '../../../components/PortfolioLibrary/uploadChart/UploadChart.js';
import MediaGallery from '../../../components/VarsunLibrary/mediaGallery/MediaGallery';
import ProfileButton from '../../../components/PortfolioLibrary/profileButton/ProfileButton.js';
import Logo from '../../../components/PortfolioLibrary/logo/Logo.js';
import Media from '../../../components/VarsunLibrary/media/Media.js';
import '../../../components/VarsunLibrary/mediaGallery/media_gallery.css';
import NavigationDots from "../../../components/VarsunLibrary/navigationDots/NavigationDots.js";
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

var mediaJson = { mediaType: "Image", src: "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId: "A1B2C3", mediaId: "123456", ipfsUrl: "ipfs:conn", licenseCount: 20, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" }

const MediaDetails = (props) => {
    let state = {
        stepNumber: 0,
    };
    var divHeight = () => {
        var innerHeight = window.innerHeight;
        return innerHeight - 400
    }
    let location = useLocation();
    let history = useHistory();
    let backButton = () => {
        return history.goBack();
    }
    console.log(location, props);
    $(function () {
        $('.ResOption').on('click', function () {
            $('.ResFilter').css('background-color', '#ffffff');
            $(this).find('.RadioOption_Inner').css('background-color', '#ff004f');
        })
    })
    $(function () {
        $('.menuButton').on('click', function () {
            $('.menuButton').removeClass('activeButton');
            $(this).addClass('activeButton');
        })
    })
    return (
        <div id="accountContent" className="accountContentContainer">
            <ProfileHeader sceneState="account" />
            <div id="divContent">
                <div id="divMediaGallery" className="horizontalGallery">
                    <div id="divLeftRightNav" className="mediaGallerySlimNav">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div className="closeView" onClick={backButton}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div id="divMediaContent" className="row">
                    <div id="divMediaView" className="mediaViewParent" style={{ height: { divHeight } }}>
                        <div id="divMediaSource" className="mediaView">
                            <Media
                                mediaType={location.state.mediaType}
                                src={location.state.src}
                                certificateId={location.state.certificateId}
                                mediaId={mediaJson.mediaId}
                                ipfsUrl={mediaJson.ipfsUrl}
                                licenseCount={mediaJson.licenseCount}
                                mediaTitle={location.state.mediaTitle}
                                mediaCreator={location.state.mediaCreator}
                                format='detailed'
                            />
                        </div>
                        <div id="divMediaMetrics" className="none">
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
                        </div>
                    </div>
                    <div id="divMediaInfo" className="mediaContent" style={{ height: { divHeight } }}>
                        <div className="menuButtons">
                            <div className="buttonsContainer">
                                <div id={"menuButton_1_" + location.state.mediaId} className="menuButton activeButton">
                                    <p>Share</p>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div id={"menuButton_2_" + location.state.mediaId} className="menuButton">
                                    <p>Certificates</p>
                                    <i className="fas fa-award"></i>
                                </div>
                                <div id={"menuButton_3_" + location.state.mediaId} className="menuButton">
                                    <p>Licenses</p>
                                    <i className="fas fa-clone"></i>
                                </div>
                                <div id={"menuButton_4_" + location.state.mediaId} className="menuButton">
                                    <p>Media Stats</p>
                                    <i className="fas fa-download"></i>
                                </div>
                                <div id={"menuButton_5_" + location.state.mediaId} className="menuButton">
                                    <p>Token Stats</p>
                                    <i className="fas fa-comment"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mediaContentContainer">
                            <div className="mediaShare_Section section">
                                <div id="divMediaTitle" className="mediaTitle">
                                    <h1>Lorem Ipsum dummy text and other stuff, and more stuff. etc. </h1>
                                </div>
                                <div id="divMediaTags">
                                    <div className="tagContainer">
                                        <p className="tags">Lightbulb,</p>
                                        <p className="tags">Red,</p>
                                        <p className="tags">Night Life,</p>
                                        <p className="tags">Sunrise,</p>
                                        <p className="tags">MrPurple,</p>
                                        <p className="tags">Animals,</p>
                                        <p className="tags">Bunny,</p>
                                        <p className="tags">Something,</p>
                                    </div>
                                </div>
                                <div id="divMediaShare" style={{ marginTop: "-15px" }}>
                                    <h1 className="mediaHeader">Share Media</h1>
                                    <div className="RadioOption ResOption">
                                        <div className="RadioOption_Inner ResFilter" style={{ backgroundColor: '#ff004f' }}></div>
                                        <div className="RadioOption_Text">
                                            <h1>High Resolution</h1>
                                            <p>Lorem Ipsum dummy text and other stuff, and more stuff. etc. </p>
                                        </div>
                                    </div>
                                    <div className="RadioOption ResOption">
                                        <div className="RadioOption_Inner ResFilter"></div>
                                        <div className="RadioOption_Text">
                                            <h1>Low Resolution</h1>
                                            <p>Lorem Ipsum dummy text and other stuff, and more stuff. etc. </p>
                                        </div>
                                    </div>
                                    <div id="divShareButtons" className="mediaShareButtons">
                                        <button className="shareButton"><h1>Share</h1></button>
                                        <button className="downloadButton"><h1>Download</h1></button>
                                    </div>
                                </div>
                                <div id="divMediaAnnotations" className="mediaAnnotations">
                                    <div className="annotation">
                                        <h1>Certificate:</h1>
                                        <p>Burst Some Certification</p>
                                    </div>
                                    <div className="annotation">
                                        <h1>License:</h1>
                                        <p>Burst Some Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaDetails;