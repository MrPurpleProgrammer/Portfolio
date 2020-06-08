import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MediaDetailed extends Component {
    render() {
        return (
            <div className="mediaDetailedContainer"
                data-asset={this.props.mediaType}
                data-certificate={this.props.certificateID}
            >
                <Link to={{
                    pathname: '/Media/MediaDetails',
                    search: 'id=' + this.props.mediaId + '&mediaType=' + this.props.mediaType + '&certificateID=' + this.props.certificateId,
                    state: {
                        src: this.props.src,
                        mediaType: this.props.mediaType,
                        certificateId: this.props.certificateId,
                        mediaTitle: this.props.mediaTitle,
                        mediaCreator: this.props.mediaCreator,
                    }, 
                }}>
                    <img className="mediaDetailed" src={this.props.src}
                        data-source={this.props.ipfsUrl}
                        data-dimensions={{ Obj: "42" }}
                    />
                </Link>
            </div >
        )
    }
}
export default MediaDetailed;