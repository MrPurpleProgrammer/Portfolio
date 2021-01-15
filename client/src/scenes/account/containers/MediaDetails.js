import React, { useState, Component, useEffect, useRef } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import $ from 'jquery';
import Share from '../../share/Share'
import '../../../components/VarsunLibrary/mediaGallery/media_gallery.scss';
import {
    BrowserRouter as Router,
    useParams,
} from "react-router-dom";
import MediaStats from "../../../components/PortfolioLibrary/mediaDetails/MediaStats.js";
import MediaReport from "../../../components/PortfolioLibrary/mediaDetails/MediaReport";
import { API_GetDetectionReport } from "../../../api/media";
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import Media from '../../../components/VarsunLibrary/media/Media'

function MediaDetails(props) {
    const [viewContent, setViewContent] = useState('none');
    const [detectionReport, setDetectionReport] = useState(null);
    const [content, setContent] = useState('share');
    const [totalDetectionMatches, setTotalDetectionMatches] = useState(0);
    const _isMounted = useRef(true);
    let match = useParams();
    let divHeight = () => {
        var innerHeight = window.innerHeight;
        return innerHeight - 400
    }
    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        API_GetDetectionReport(location.state.mediaId).then(data => {
            if (_isMounted.current) {
                setDetectionReport(data);
                setTotalDetectionMatches(data.webDetection.fullMatchingImages.length + data.webDetection.partialMatchingImages.length + data.webDetection.pagesWithMatchingImages.length + data.webDetection.visuallySimilarImages.length);
            }
        })
            .catch(err => console.log(err));
        return function cleanup() {
            _isMounted.current = false;
        }
    }, [])
    let backButton = () => {
        return history.goBack();
    }
    let toggleShareState = (state) => {
        if (state == 'share') {
            setViewContent('none')
            $('.shareButton').html("<h1 style='color: white'>Share</h1>");
            return;
        }
        else if (state == 'none' || state == 'mediaReport') {
            setViewContent('share');
            $('.shareButton').html("<i class='fas fa-times' style='color: white' aria-hidden='true'></i>");
            return
        }
    }
    let toggleMediaReport = (state) => {
        if (state == 'mediaReport') {
            setViewContent('none')
            $('#viewReportButton').html("<h1 style='color: white'>View Full Report</h1>");
            return;
        }
        else if (state == 'none' || state == 'share') {
            setViewContent('mediaReport');
            $('#viewReportButton').html("<i class='fas fa-times' style='color: white' aria-hidden='true'></i>");
            return
        }
    }
    let viewDetails = () => {
        if (viewContent == 'share') {
            return (
                <Share
                    mediaType={location.state.mediaType}
                    mediaUrl={location.state.mediaUrl}
                    certificateId={location.state.certificateId}
                    mediaId={location.state.mediaId}
                    mediaTitle={location.state.mediaTitle}
                    mediaCreator={location.state.mediaCreator}
                    match={match}
                    accountId={props.auth.account._id}
                    licenseCount={10}
                />
            )
        }
        else if (viewContent == 'mediaReport') {
            return (
                <MediaReport
                    webReport={detectionReport}
                    socialReport={{}}
                    location={location}
                />
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    let tagList = location.state.mediaTags.map((e, i) => {
        return <p className="tags" key={i}>{e},</p>
    });
    let mediaDetails = () => {
        if (content == 'share') {
            return (
                <div className="mediaShare_Section section">
                    <div id="divMediaTitle" className="mediaTitle">
                        <h1>{location.state.mediaTitle}</h1>
                    </div>
                    <div id="divMediaTags">
                        <div className="tagContainer">
                            {tagList}
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
                            <button className="shareButton" onClick={() => { toggleShareState(viewContent) }}><h1>Share</h1></button>
                            <button className="downloadButton"><h1>Download</h1></button>
                        </div>
                    </div>
                    <div id="divMediaAnnotations" className="mediaAnnotations">
                        <div className="annotation">
                            <h1>Certificate ID:</h1>
                            <p>{location.state.certificateId}</p>
                        </div>
                        <div className="annotation">
                            <h1>Transaction Hash:</h1>
                            <p>{location.state.transactionHash}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else if (content == 'media_stats') {
            if (detectionReport == null) {
                return (
                    <div style={{ height: "515px" }}>
                        <div className="mediaDetailsLoadingDiv">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="mediaStats_Section section">
                        <div id="divMediaTitle" className="mediaTitle">
                            <h1>{location.state.mediaTitle}</h1>
                        </div>
                        <div id='divMediaDetectionStats'>
                            <div id='divMediaMetrics' className="mediaMetrics">
                                <p>We have found </p>
                                <p style={{ textDecoration: 'underline' }}>{totalDetectionMatches} instances</p>
                                <p> of your media file across the web. Of which </p>
                                <p style={{ textDecoration: 'underline' }}>{detectionReport.webDetection.fullMatchingImages.length} complete matches</p>
                                <p>, </p>
                                <p style={{ textDecoration: 'underline' }}>{detectionReport.webDetection.partialMatchingImages.length} partial matches</p>
                                <p>, and </p>
                                <p style={{ textDecoration: 'underline' }}>{detectionReport.webDetection.pagesWithMatchingImages.length} pages with matching images</p>
                                <p>. We also found </p>
                                <p style={{ textDecoration: 'underline' }}>{detectionReport.webDetection.visuallySimilarImages.length} visually similar images.</p>
                            </div>
                        </div>
                        <button id="viewReportButton" className="reportButton" onClick={() => { toggleMediaReport(viewContent) }}><h1>View Full Report</h1></button>
                        <MediaStats location={location} />
                        <div id="divMediaAnnotations" className="mediaAnnotations">
                            <div className="annotation">
                                <h1>Certificate ID:</h1>
                                <p>{location.state.certificateId}</p>
                            </div>
                            <div className="annotation">
                                <h1>Transaction Hash:</h1>
                                <p>{location.state.transactionHash}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
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
                                mediaUrl={location.state.mediaUrl}
                                certificateId={location.state.certificateId}
                                mediaId={location.state.mediaId}
                                mediaTitle={location.state.mediaTitle}
                                mediaCreator={location.state.mediaCreator}
                                format='detailed'
                                match={match}
                                accountId={props.auth.account._id}
                            />
                            {viewDetails()}
                        </div>
                    </div>
                    <div id="divMediaInfo" className="mediaContent" style={{ height: { divHeight } }}>
                        <div className="menuButtons">
                            <div className="buttonsContainer">
                                <div id={"menuButton_1_" + location.state.mediaId} className="menuButton activeButton" onClick={() => setContent('share')}>
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
                                <div id={"menuButton_4_" + location.state.mediaId} className="menuButton" onClick={() => setContent('media_stats')}>
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
                            {mediaDetails()}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MediaDetails;