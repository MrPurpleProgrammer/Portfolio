import React, { Component, useEffect, useState } from "react";
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import $ from 'jquery';
import { Helmet } from "react-helmet";
import { API_GetShareableUrl } from "../../api/ipfs";

function Share(props) {
    let [ipfsShareUrl, setIpfsShareUrl] = useState('');
    let facebookSDK = (d, s, id) => {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=221248411282503&autoLogAppEvents=1";
        fjs.parentNode.insertBefore(js, fjs);
    }

    useEffect(() => {
        facebookSDK(document, 'script', 'facebook-jssdk');
        $('#divShareModal').animate({ width: '45%' }, 200);
        $('#divShareContent').animate({ opacity: "100%" }, 150);
        if (props.mediaType != 'image/jpeg') setIpfsShareUrl(props.mediaUrl);
        else {
            API_GetShareableUrl(props.mediaUrl)
            .then(data => {
                console.log(data);
                setIpfsShareUrl(data.share[0].path);
            })
            .catch(err => console.log(err));
        }
        return () => {
            $('#divShareMedia').animate({ width: "100%" }, 250);
            $('#divShareModal').animate({ width: '0%' }, 200);
            $('#divShareContent').animate({ opacity: "0%" }, 150);
        }
    }, [])
    return (
        <div id='divShareMedia'>
            <div id="fb-root"></div>
            <div id='divShareModal' className='shareModal' style={{ width: '0%' }}>
                <div id='divShareContent' style={{ opacity: '0%' }}>
                    <div id='divDescriptionText' className='shareDescriptionText'>
                        <h1>You're essentially sharing the IPFS URL</h1>
                        <p>Choose a Platform to Share</p>
                    </div>
                    <div id='divFacebookShare' className='fbShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + ipfsShareUrl}
                        data-layout="button"
                        data-size="large"
                    >
                        <div className='shareIconDiv shareActive'>
                            <a target="popup"
                                onClick={() => {
                                    let fbShareUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fipfs.io%2Fipfs%2F" + ipfsShareUrl + "&amp"
                                    window.open(fbShareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    return false
                                }}
                                href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fipfs.io%2Fipfs%2F" + ipfsShareUrl + "&amp;src=sdkpreparse"}
                                class="fb-xfbml-parse-ignore">
                                <i className="fab fa-facebook" style={{ color: "#4267b2" }}></i>
                                <h1> Facebook </h1>
                            </a>
                            <div id="divPortCount" className='portCounter'>
                                <i class="fas fa-ruble-sign" aria-hidden="true"></i>
                                <h1>190</h1>
                            </div>
                        </div>
                    </div>
                    <div id='divTwitterShare' className='twitterShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv shareActive'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fab fa-twitter" style={{ color: "#1c9cea" }}></i>
                                <h1> Twitter </h1>
                            </a>
                            <div id="divPortCount" className='portCounter'>
                                <i class="fas fa-ruble-sign" aria-hidden="true"></i>
                                <h1>97</h1>
                            </div>
                        </div>
                    </div>
                    <div id='divRedditShare' className='redditShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    $('#divRedditShare .shareIconDiv').toggleClass('shareActive');
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fab fa-reddit" style={{ color: "#f74300" }}></i>
                                <h1> Reddit </h1>
                            </a>
                        </div>
                    </div>
                    <div id='divPinterestShare' className='redditShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    $('#divPinterestShare .shareIconDiv').toggleClass('shareActive');
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fab fa-pinterest" style={{ color: "#c51f27" }}></i>
                                <h1> Pinterest </h1>
                            </a>
                        </div>
                    </div>
                    <div id='divWhatsappShare' className='redditShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    $('#divWhatsappShare .shareIconDiv').toggleClass('shareActive');
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fab fa-whatsapp" style={{ color: "#4ced69" }}></i>
                                <h1> Whatsapp </h1>
                            </a>
                        </div>
                    </div>
                    <div id='divTumblrShare' className='redditShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    $('#divTumblrShare .shareIconDiv').toggleClass('shareActive');
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fab fa-tumblr-square" style={{ color: "#fff" }}></i>
                                <h1> Tumblr </h1>
                            </a>
                        </div>
                    </div>
                    <div id='divEmailShare' className='redditShareBtn socialShareButton'
                        data-href={'https://ipfs.io/ipfs/' + props.mediaUrl}
                    >
                        <div className='shareIconDiv'>
                            <a target="popup"
                                onClick={() => {
                                    let shareUrl = ""
                                    window.open(shareUrl, 'popup', 'width=600,height=600,scrollbars=no,resizable=no')
                                    $('#divEmailShare .shareIconDiv').toggleClass('shareActive');
                                    return false
                                }}
                                class="fb-xfbml-parse-ignore">
                                <i class="fas fa-envelope-open-text" style={{ color: "#fff" }}></i>
                                <h1> Email </h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share