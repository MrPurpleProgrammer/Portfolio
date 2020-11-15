import React, { Component } from 'react';
import './media_gallery.css';
import $ from 'jquery';
import Media from '../media/Media.js'
import PortfolioIcon from '../../PortfolioLibrary/emptyPortfolioIcon/PortfolioIcon'

class MediaGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: this.props.sort
        };
    }
    sortGalleryDefault = () => {
        var pw = document.getElementById('ulMediaGallery').offsetWidth;
        var mediaItems = $('.mediaGrid').children();
        var n = mediaItems.length;
        var tw = 0;
        for (var j = 0; j < mediaItems.length; j++) {
            tw += mediaItems[j].offsetWidth;
        }
        var orderNum = 0;
        while (orderNum != n) {
            var rs = pw;
            for (var i = 0; i < mediaItems.length; i++) {
                if (mediaItems[i].style.order == "") {
                    rs = rs - mediaItems[i].offsetWidth;
                    if (rs > 100) {
                        mediaItems[i].style.order = orderNum;
                        orderNum++;
                    }
                    else if (rs <= 100) {
                        rs = rs + mediaItems[i].offsetWidth;
                    }
                    console.log(mediaItems[i], rs, mediaItems[i].offsetWidth, orderNum);
                }
            }
        }
    }
    sortGalleryByAscendingWidth = () => {
        var parentWidth = document.getElementById('divMediaGallery').offsetWidth;
        var children = $('.mediaGrid').children();
        children.sort(function (a, b) {
            return a.offsetWidth - b.offsetWidth;
        });
        children.each((e) => {
            document.getElementById('ulMediaGallery').appendChild(children[e]);
        });
        console.log(parentWidth, children);
    }
    sortGalleryByDescendingWidth = () => {
        var parentWidth = document.getElementById('divMediaGallery').offsetWidth;
        var children = $('.mediaGrid').children();
        children.sort(function (a, b) {
            return b.offsetWidth - a.offsetWidth;
        });
        children.each((e) => {
            document.getElementById('ulMediaGallery').appendChild(children[e]);
        });
        console.log(parentWidth, children);
    }
    componentDidMount() {
        /*window.addEventListener('load', this.sortGalleryDefault);*/
    }
    render() {
        var portfolio = this.props.portfolio;
        if (portfolio.length > 0) {
            let mediaList = portfolio.map((e) =>
                <Media
                    key={e._id}
                    mediaType={e.mediaType}
                    thumbnail={e.thumbnail}
                    certificateId={e.certificateId}
                    mediaId={e._id}
                    mediaUrl={e.mediaUrl}
                    licenseCount={null}
                    mediaTitle={e.mediaTitle}
                    mediaCreator={this.props.username}
                    format={'thumbnail'}
                    match={this.props.match}
                    accountId={this.props.account._id}
                    mediaTags={e.mediaTags}
                    transactionReceipt={e.transactionReceipt}
                    transactionHash={e.transactionHash}
                />
            );
            return (
                <div>
                    <div id="divMediaGallery" className="galleryContainer">
                        <ul id="ulMediaGallery" className="mediaGrid">
                            {mediaList}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div id="divMediaGallery" className="emptyGalleryContainer">
                        <div id="divInstructions">
                            <h1>Your portfolio seems to be empty. Let's fix that!</h1>
                        </div>
                        <div className="emptyGalleryInstructionsDiv">
                            <h1>Drop a File in the</h1>
                            <h1 style={{ color: '#ff0051', fontWeight: 'Bold'}}> Upload Box </h1>
                            <h1 >above.</h1>
                        </div>
                        <div className="emptyPortIcon">
                            <PortfolioIcon/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default MediaGallery;