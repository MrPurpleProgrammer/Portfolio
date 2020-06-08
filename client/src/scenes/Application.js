import React, { Component } from 'react';
import Public from "./public/Public.js";
import Login from "./login/Login.js";
import Account from "./account/Account.js";
import Signup from "./signup/Signup.js";
import MediaDetails from "./account/containers/MediaDetails.js"
import Upload from './upload/Upload.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "./Application.css";
import AccountButton from '../components/PortfolioLibrary/accountButton/AccountButton.js';
import Media from '../components/VarsunLibrary/media/Media.js';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            userId: 12345,
        }
    }
    render() {
        var accountState;
        if (this.state.isLoggedIn == false) accountState = <Public />;
        if (this.state.isLoggedIn == true) accountState = <Account isLoggedIn={this.state.isLoggedIn} userId={this.state.userId} />;
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {accountState}
                        </Route>
                        <Route exact path="/Public">
                            <Public />
                        </Route>
                        <Route path="/Login">
                            <Login />
                        </Route>
                        <Route path="/Account">
                            <Account />
                        </Route>
                        <Route path="/Signup">
                            <Signup />
                        </Route>
                        <Route path="/Media/MediaDetails">
                            <MediaDetails />
                        </Route>
                        <Route path="/Upload">
                            <Upload />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Application;
