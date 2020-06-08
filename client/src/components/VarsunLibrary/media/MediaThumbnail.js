import React, { Component } from 'react';

class MediaThumbnail extends Component {
    render() {
        return (
            <li className="mediaType">
                <div className="mediaContainer"
                    data-asset={this.props.mediaType}
                    data-certificate={this.props.certificateID}
                >
                    <img className="mediaThumbnail" src={this.props.src}
                        data-source={this.props.ipfsUrl}
                        data-dimensions={{ Obj: "42" }}
                    />
                    <div id="divMediaOverlay" className="mediaOverlay">
                        <div className="overlayMetrics">
                            <p className="mediaTitle">{this.props.mediaTitle}</p>
                            <p className="mediaBy">{this.props.mediaCreator}</p>
                            <i className="fas fa-link"></i>
                            <p>{this.props.licenseCount}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default MediaThumbnail;