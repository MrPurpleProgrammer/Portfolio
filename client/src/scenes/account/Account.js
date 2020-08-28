import React, { Component, useState, useEffect } from "react";
import $ from 'jquery';
import AccountLanding from "./containers/AccountLanding.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {isAuthenticatedAccount} from '../../api/auth';

function Account(props) {
    let history = useHistory();
    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="fade"
        >
            <div className="accountSceneContainer">
                <AccountLanding />
            </div>
        </CSSTransition>
    );
}

export default Account