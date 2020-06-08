import React, { Component } from "react";
import $ from 'jquery';
import UploadChart from '../../components/PortfolioLibrary/uploadChart/UploadChart.js';
import MediaGallery from '../../components/VarsunLibrary/mediaGallery/MediaGallery';
import ProfileButton from '../../components/PortfolioLibrary/profileButton/ProfileButton.js';
import Logo from '../../components/PortfolioLibrary/logo/Logo.js';
import AccountLanding from "./containers/AccountLanding.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, useLocation, useHistory } from 'react-router-dom';
function getUser() {

}

const Account = (props) => {
    let history = useHistory();
    let accountState;
    if(history.location.pathname.includes("/Account/User") && history.location.search.includes("?UserGuid=12345")) {
        accountState = <AccountLanding />;
    }
    else if(props.isLoggedIn == true && props.userId == 12345) accountState = <AccountLanding />;
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="fade"
        >
            <div className="accountSceneContainer">
                {accountState}
            </div>
        </CSSTransition>
    );
}

export default Account