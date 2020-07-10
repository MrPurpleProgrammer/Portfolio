import React, { Component } from 'react';
import '../mediaGallery/media_gallery.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import MediaDetailed from './MediaDetailed.js';
import MediaThumbnail from './MediaThumbnail.js';
import MediaUploadTracker from './MediaUploadTracker';

class Media extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var mediaUrl = '/Media/MediaDetails?id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType;
        let media;
        if (this.props.format == 'thumbnail') {
            media = <Link to={{
                pathname: '/Media/MediaDetails',
                search: 'id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType + '&certificateID=' + this.props.certificateId,
                state: {
                    src: this.props.src,
                    mediaType: this.props.mediaType,
                    certificateId: this.props.certificateId,
                    mediaTitle: this.props.mediaTitle,
                    mediaCreator: this.props.mediaCreator,
                    mediaId: this.props.mediaId,
                },
            }}
            ><MediaThumbnail
                    mediaType={this.props.mediaType}
                    src={this.props.src}
                    certificateId={this.props.certificateId}
                    mediaId={this.props.mediaId}
                    ipfsUrl={this.props.ipfsUrl}
                    licenseCount={this.props.licenseCount}
                    mediaTitle={this.props.mediaTitle}
                    mediaCreator={this.props.mediaCreator}
                />
            </Link>
        }
        else if (this.props.format == 'detailed') {
            media = <MediaDetailed
                mediaType={this.props.mediaType}
                src={this.props.src}
                certificateId={this.props.certificateId}
                mediaId={this.props.mediaId}
                ipfsUrl={this.props.ipfsUrl}
                licenseCount={this.props.licenseCount}
                mediaTitle={this.props.mediaTitle}
                mediaCreator={this.props.mediaCreator}
            />
        }
        else if (this.props.format == 'upload') {
            media = <MediaUploadTracker
                mediaType={this.props.mediaType}
                src={this.props.src}
                certificateId={this.props.certificateId}
                mediaId={this.props.mediaId}
                ipfsUrl={this.props.ipfsUrl}
                licenseCount={this.props.licenseCount}
                mediaTitle={this.props.mediaTitle}
                mediaCreator={this.props.mediaCreator}
            />
        }
        return (
            <div id={"divMedia_" + this.props.mediaId} style={{height: "inherit"}}>{media}</div>
        )
    }
}

export default Media;
