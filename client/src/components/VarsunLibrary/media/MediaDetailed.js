import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MediaDetailed extends Component {
    render() {
        return (
            <div className="mediaDetailedContainer"
                data-asset={this.props.mediaType}
                data-certificate={this.props.certificateID}
            >
                <img className="mediaDetailed" src={this.props.src}
                    data-source={this.props.ipfsUrl}
                    data-dimensions={{ Obj: "42" }}
                />
            </div >
        )
    }
}
export default MediaDetailed;