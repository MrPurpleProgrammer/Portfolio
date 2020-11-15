import React, { Component } from 'react';
import IconGenerator from '../../PortfolioLibrary/iconGenerator/IconGenerator';

class MediaShareView extends Component {
    handleSource() {
        if (this.props.mediaType == 'text/html') return <IconGenerator extension='html' class='mediaThumbnail' />
        else if (this.props.mediaType != 'image/jpeg') return <IconGenerator extension='file' class='mediaDetailed' />
        else {
            return (
                <img className="mediaDetailed" src={'https://ipfs.io/ipfs/' + this.props.mediaUrl}
                    data-source={this.props.ipfsUrl}
                    data-dimensions={{ Obj: "42" }}
                />
            )
        }
    }
    render() {
        return (
            <div className="mediaDetailedContainer"
                data-asset={this.props.mediaType}
                data-certificate={this.props.certificateID}
            >
            {this.handleSource()}
            </div >
        )
    }
}
export default MediaShareView;