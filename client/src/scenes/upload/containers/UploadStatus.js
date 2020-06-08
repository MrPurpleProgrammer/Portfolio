import React, { Component, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import Media from '../../../components/VarsunLibrary/media/Media'
import { Progress } from 'semantic-ui-react'

function UploadStatus(props) {
    let location = useLocation();
    let history = useHistory();
    let handleUploadSource = () => {
        if(typeof location.state.event != "undefined") {
            return URL.createObjectURL(location.state.event[0]);
        }
        else {
            console.log(location);
            return "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg";
        }
    }
    let src = handleUploadSource();
    return (
        <div id="divUploadStatusTracker">
            <div id="divMediaSource" className="mediaUploadView">
                <Media
                    mediaType={'Image'}
                    src={src}
                    certificateId={1234}
                    mediaId={12345}
                    ipfsUrl={'www.helloworld.com'}
                    licenseCount={1}
                    mediaTitle={'Purple'}
                    mediaCreator={'MrPurple'}
                    format='upload'
                />
            </div>
            <div id="divUploadProgressBars" className="progressBarContainer">
                <p>Analyzing Media Metadata</p>
                <Progress percent={70} progress indicating />
                <p>Hashing Media Metadata</p>
                <Progress percent={24} progress />
                <p>Uploading meda to IPFS</p>
                <Progress percent={0} progress />
                <p>Creating DMCT</p>
                <Progress percent={0} progress />
                <p>Certifying DMCT In Ethereum</p>
                <Progress percent={0} progress  />
            </div>
        </div>
    );
}
export default UploadStatus;