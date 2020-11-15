import React, { Component } from 'react';
import IconGenerator from '../../PortfolioLibrary/iconGenerator/IconGenerator';

class MediaThumbnail extends Component {
    handleSource() {
        if (this.props.thumbnail == "null") {
            if(this.props.mediaType == 'text/html') return <IconGenerator extension='html' class='mediaThumbnail' />
            else return <IconGenerator extension='file' class='mediaThumbnail' />

        }
        else {
            return (
            <img className="mediaThumbnail" src={this.props.thumbnail}
                data-source={this.props.mediaUrl}
            />
            )
        }
    }
    render() {
        return (
            <li className="mediaType">
                <div className="mediaContainer"
                    data-asset={this.props.mediaType}
                    data-certificate={this.props.certificateID}
                >
                    {this.handleSource()}
                    <div id="divMediaOverlay" className="mediaOverlay">
                        <div className="overlayMetrics">
                            <p className="mediaTitle">{this.props.mediaTitle}</p>
                            <p className="mediaBy">By: {this.props.mediaCreator}</p>
                            <div className="overlayCertCount">
                                <i className="fas fa-award"></i>
                                <p>{this.props.licenseCount} 10</p>
                            </div>
                            <div className="overlayLicenseCount">
                                <i className="fas fa-clone"></i>
                                <p>{this.props.licenseCount} 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default MediaThumbnail;