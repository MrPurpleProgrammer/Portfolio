import React, { useState, Component, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import $ from 'jquery';
import Media from '../../../components/VarsunLibrary/media/Media.js';
import Share from '../../share/Share'
import '../../../components/VarsunLibrary/mediaGallery/media_gallery.css';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";

function MediaLink(props) {
    const [isShareActive, setShareActive] = useState(false);
    const [media, setMedia] = useState({});
    let match = useParams();
    var divHeight = () => {
        var innerHeight = window.innerHeight;
        return innerHeight - 400
    }
    let location = useLocation();
    let history = useHistory();
    let backButton = () => {
        return history.goBack();
    }
    let getMediaByIpfs = () => {
        let url = process.env.REACT_APP_SERVER_API_URL + 'ipfs/read/media/' + match.ipfsUrl;
        fetch(url, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                setMedia(data.media);
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getMediaByIpfs();
    }, [])
    let mediaOrShare = () => {
        if (isShareActive == true) {
            return (
                <div id="divShareView" className="mediaViewParent" style={{ height: { divHeight } }}>
                    <div id="divShareSource" className="shareView">
                        <Share
                            mediaType={media.mediaType}
                            mediaUrl={media.mediaUrl}
                            certificateId={media.certificateId}
                            mediaId={media.mediaId}
                            mediaTitle={media.mediaTitle}
                            mediaCreator={media.mediaCreator}
                            match={match}
                            licenseCount={10}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="divMediaView" className="mediaViewParent" style={{ height: { divHeight } }}>
                    <div id="divMediaSource" className="mediaView">
                        <Media
                            mediaType={media.mediaType}
                            mediaUrl={media.mediaUrl}
                            certificateId={media.certificateId}
                            mediaId={media.mediaId}
                            mediaTitle={media.mediaTitle}
                            mediaCreator={media.mediaCreator}
                            format='detailed'
                            match={match}
                        />
                    </div>
                </div>
            )
        }
    }
    function toggleShareState(state) {
        if (state == true) {
            setShareActive(false)
            $('.shareButton').html("<h1 style='color: white'>Share</h1>");
            return;
        }
        else if (state == false) {
            setShareActive(true);
            $('.shareButton').html("<i class='fas fa-times' style='color: white' aria-hidden='true'></i>");
            return
        }
    }
    // let tagList = media.mediaTags.map((e) => {
    //     return <p className="tags">{e},</p>
    // });
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
                    {mediaOrShare()}
                    <div id="divMediaInfo" className="mediaContent" style={{ height: { divHeight } }}>
                        <div className="menuButtons">
                            <div className="buttonsContainer">
                                <div id={"menuButton_1_" + media.mediaId} className="menuButton activeButton" >
                                    <p>Share</p>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div id={"menuButton_4_" + media.mediaId} className="menuButton">
                                    <p>Media Stats</p>
                                    <i className="fas fa-download"></i>
                                </div>
                                <div id={"menuButton_5_" + media.mediaId} className="menuButton">
                                    <p>Token Stats</p>
                                    <i className="fas fa-comment"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mediaContentContainer">
                            <div className="mediaShare_Section section">
                                <div id="divMediaTitle" className="mediaTitle">
                                    <h1>{media.mediaTitle}</h1>
                                </div>
                                <div id="divMediaTags">
                                    <div className="tagContainer">
                                        {/* {tagList} */}
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
                                        <button className="shareButton" onClick={() => { toggleShareState(isShareActive) }}><h1>Share</h1></button>
                                        <button className="downloadButton"><h1>Download</h1></button>
                                    </div>
                                </div>
                                <div id="divMediaAnnotations" className="mediaAnnotations">
                                    <div className="annotation">
                                        <h1>Certificate ID:</h1>
                                        <p>{media.certificateId}</p>
                                    </div>
                                    <div className="annotation">
                                        <h1>Transaction Hash:</h1>
                                        <p>{media.transactionHash}</p>
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

export default MediaLink;