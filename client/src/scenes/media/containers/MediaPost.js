import React, { useState, Component } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import $ from 'jquery';
import Media from '../../../components/VarsunLibrary/media/Media.js';
import Share from '../../share/Share'
import '../../../components/VarsunLibrary/mediaGallery/media_gallery.css';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from "react-router-dom";

function MediaPost(props) {
    return(
        <div>
            Hello World
        </div>
    )
}
export default MediaPost