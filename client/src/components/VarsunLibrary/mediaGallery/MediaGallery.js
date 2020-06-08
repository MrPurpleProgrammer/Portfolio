import React, { Component } from 'react';
import './media_gallery.css';
import $ from 'jquery';
import Media from '../media/Media.js'

class MediaGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort:this.props.sort
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
    getUserMediaList() {
        var json = [
            { id:1231245344, mediaType:"Image", src:"https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 20, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1232341245, mediaType:"Image", src:"https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?cs=srgb&dl=person-in-black-jacket-walking-on-snow-covered-pathway-3494648.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 12 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231123213, mediaType:"Image", src:"https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?cs=srgb&dl=hot-air-balloons-3377538.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 4 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231127782, mediaType:"Image", src:"https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?cs=srgb&dl=chairs-furniture-indoors-interior-design-245535.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 23 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231280898, mediaType:"Image", src:"https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 14 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231212312, mediaType:"Image", src:"https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 2 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231224788, mediaType:"Image", src:"https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231227774, mediaType:"Image", src:"https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231223676, mediaType:"Image", src:"https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231235687, mediaType:"Image", src:"https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231235467, mediaType:"Image", src:"https://images.pexels.com/photos/3476402/pexels-photo-3476402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231268832, mediaType:"Image", src:"https://images.pexels.com/photos/3484678/pexels-photo-3484678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231212356, mediaType:"Image", src:"https://images.pexels.com/photos/3536526/pexels-photo-3536526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231456862, mediaType:"Image", src:"https://images.pexels.com/photos/3375493/pexels-photo-3375493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231245457, mediaType:"Image", src:"https://images.pexels.com/photos/3378994/pexels-photo-3378994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1231221325, mediaType:"Image", src:"https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?cs=srgb&dl=person-in-black-jacket-walking-on-snow-covered-pathway-3494648.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 12 , mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple"},
            { id:1212335312, mediaType:"Image", src:"https://images.pexels.com/photos/3377538/pexels-photo-3377538.jpeg?cs=srgb&dl=hot-air-balloons-3377538.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 4, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1343462312, mediaType:"Image", src:"https://images.pexels.com/photos/245535/pexels-photo-245535.jpeg?cs=srgb&dl=chairs-furniture-indoors-interior-design-245535.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 23, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231654612, mediaType:"Image", src:"https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 14, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231234442, mediaType:"Image", src:"https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 2, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1232346512, mediaType:"Image", src:"https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231234572, mediaType:"Image", src:"https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1234687312, mediaType:"Image", src:"https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1234877312, mediaType:"Image", src:"https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1234784252, mediaType:"Image", src:"https://images.pexels.com/photos/2304917/pexels-photo-2304917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231223222, mediaType:"Image", src:"https://images.pexels.com/photos/3337210/pexels-photo-3337210.jpeg?cs=srgb&dl=city-dawn-sunset-skyline-3337210.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 14, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1233479812, mediaType:"Image", src:"https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?cs=srgb&dl=running-vehicles-on-road-3347244.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 2, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231231112, mediaType:"Image", src:"https://images.pexels.com/photos/3361480/pexels-photo-3361480.jpeg?cs=srgb&dl=photo-of-temple-during-daytime-3361480.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 0, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1233456712, mediaType:"Image", src:"https://images.pexels.com/photos/3319097/pexels-photo-3319097.jpeg?cs=srgb&dl=assorted-color-vehicle-lot-3319097.jpg&fm=jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231245656, mediaType:"Image", src:"https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
            { id:1231345542, mediaType:"Image", src:"https://www.robin-noorda.com/uploads/1/6/8/3/16830688/3347022_orig.jpg", certificateId:"A1B2C3", mediaId:"123456", ipfsUrl:"ipfs:conn", licenseCount: 200, mediaTitle: "Lorem Ipsum", mediaCreator: "MrPurple" },
        ]
        return json;
    }
    componentDidMount() {
        /*window.addEventListener('load', this.sortGalleryDefault);*/
    }
    render() {
        var mediaJson = this.getUserMediaList();
        const mediaList = mediaJson.map((e) =>
            <Media
                key = {e.id}
                mediaType={e.mediaType}
                src={e.src}
                certificateId={e.certificateId}
                mediaId={e.mediaId}
                ipfsUrl={e.ipfsUrl}
                licenseCount={e.licenseCount}
                mediaTitle={e.mediaTitle}
                mediaCreator={e.mediaCreator}
                format= {'thumbnail'}
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
}
export default MediaGallery;