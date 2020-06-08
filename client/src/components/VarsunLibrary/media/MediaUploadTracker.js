import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MediaUploadTracker extends Component {
    render() {
        return (
            <div className="mediaUploadTrackerContainer"
                data-asset={this.props.mediaType}
                data-certificate={this.props.certificateID}
            >
                <img className="mediaUploadTracker" src={this.props.src}
                    data-source={this.props.ipfsUrl}
                    data-dimensions={{ Obj: "42" }}
                />
            </div >
        )
    }
}
export default MediaUploadTracker;