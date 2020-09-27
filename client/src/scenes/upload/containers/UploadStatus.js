import React, { Component, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import Media from '../../../components/VarsunLibrary/media/Media'
import { Progress } from 'semantic-ui-react'
import IconGenerator from '../../../components/PortfolioLibrary/iconGenerator/IconGenerator'

function UploadStatus(props) {
    let location = useLocation();
    let history = useHistory();
    let handleUploadSource = () => {
        if (typeof location.state.event != "undefined") {
            return URL.createObjectURL(location.state.event[0]);
        }
        else {
            console.log(location);
            return "https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg";
        }
    }
    let src = handleUploadSource();
    let filePath = location.state.event[0].name;
    let fileExt = filePath.split('.').pop();
    let preview;
    if (fileExt == 'jpeg' || fileExt == 'png' || fileExt == 'jpg' || fileExt == 'JPG' || fileExt == 'svg' || fileExt == 'gif') {
        return (
            <div id="divUploadStatusTracker">
                <div id="divMediaSource" className="mediaUploadView">
                    <Media
                        mediaType={'Image'}
                        src={src}
                        format='upload'
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="divUploadStatusTracker">
                <div id="divMediaSource" className="mediaUploadView">
                    <div className="mediaUploadTrackerContainer">                    
                        <IconGenerator
                            extension={fileExt}
                            class='thumbIcon'
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default UploadStatus;