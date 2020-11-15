import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import $ from 'jquery';
import { Helmet } from "react-helmet";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MediaPost from "./containers/MediaPost"
import MediaLink from "./containers/MediaLink"

class Media extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Media/Post/:ipfsUrl">
                        <MediaPost />
                    </Route>
                    <Route path="/Media/Link/:ipfsUrl" component={MediaLink} />
                </Switch>
            </div>

        );
    }

}

export default Media