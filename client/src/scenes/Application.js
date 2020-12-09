import React, { Component } from 'react';
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
import "./Application.css";
import AccountButton from '../components/PortfolioLibrary/accountButton/AccountButton.js';
import Media from '../components/VarsunLibrary/media/Media.js';
import { isAuthenticatedAccount } from '../api/auth.js';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            accountId: null,
        }
    }

    componentWillMount() {
        let accountState = isAuthenticatedAccount();
        if (accountState.token) {
            this.setState({ accountId: accountState.res.account._id });
            this.setState({ isLoggedIn: true });
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            {this.state.isLoggedIn ? <Redirect from='/' to={{pathname: "/Account/Profile/" + this.state.accountId}} /> : <Redirect from='/' to={{pathname: "/Public"}}/>}
                        </Route>
                        <Route exact path="/Public">
                                <Public />
                            </Route>
                            <Route path="/Login">
                                <Login />
                            </Route>
                            <Route path="/Account" component={Account} />
                            <Route path="/Signup">
                                <Signup />
                            </Route>
                            <Route path={"/Upload/:id"}>
                                <Upload />
                            </Route>
                            <Route path={"/Media"} component={MediaScene} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Application;
