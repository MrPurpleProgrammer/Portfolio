import React, { Component } from 'react';

class MediaUploadTracker extends Component {
    componentDidMount() {
        console.log(this.props.src);
    }
    render() {
        return (
            <div className="mediaUploadTrackerContainer">
                <img className="mediaUploadTracker" src={this.props.src} />
            </div >
        )
    }
}
export default MediaUploadTracker;