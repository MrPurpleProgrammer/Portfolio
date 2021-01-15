import React, { Component, Suspense, lazy, useEffect, useState } from 'react';
import Public from "./public/Public.js";
import Login from "./login/Login.js";
import Account from "./account/Account.js";
import Signup from "./signup/Signup.js";
import MediaDetails from "./account/containers/MediaDetails.js";
import Upload from './upload/Upload.js';
import MediaScene from './media/Media.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./Application.scss";
import AccountButton from '../components/PortfolioLibrary/accountButton/AccountButton.js';
import Media from '../components/VarsunLibrary/media/Media.js';
import { API_IsAuthenticatedAccount } from '../api/storage/auth.js';
import { useThemeContext } from '../components/PortfolioLibrary/hooks/Hooks'

function Application(props) {
    const [isAuth, setIsAuth] = useState(false);
    const [accountId, setAccountId] = useState(null);

    useEffect(() => {
        let accountState = API_IsAuthenticatedAccount();
        if (accountState.token) {
            setAccountId(accountState.res.account._id);
            setIsAuth(true);
        }
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {isAuth ? <Redirect from='/' to={{ pathname: "/Client/Account/Profile/" + accountId }} /> : <Redirect from='/' to={{ pathname: "/Client/Public" }} />}
                </Route>
                <Route exact path="/Client/Public">
                    <Public />
                </Route>
                <Route path="/Client/Login">
                    <Login />
                </Route>
                <Route path="/Client/Account" component={Account} />
                <Route path="/Client/Signup">
                    <Signup />
                </Route>
                <Route path={"/Client/Upload/:id"}>
                    <Upload />
                </Route>
                <Route path={"/Client/Media"} component={MediaScene} />
            </Switch>
        </Router>
    );
}

export default Application;
