import React, { Component, useState, useEffect } from "react";
import AccountLanding from "./containers/AccountLanding.js";
import { CSSTransition } from 'react-transition-group';
import { Redirect, Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { API_IsAuthenticatedAccount } from '../../api/storage/auth';
import { API_GetAccount } from "../../api/account.js";
import MediaDetails from "./containers/MediaDetails.js";
import AuthGuard from "../../api/storage/authGuard/AuthGuard";

function Account(props) {
    let history = useHistory();
    let match = useRouteMatch();
    let [Portfolio, setPortfolio] = useState([]);

    let updatePortfolio = (portfolio) => {
        setPortfolio(portfolio);
    }
    return (
        <div id="divAccountParentContainer">
            <Switch>
                <Route path={match.path + "/Profile/:accountId"}>
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div className="accountSceneContainer">
                            <AuthGuard component={AccountLanding} match={match} portfolio={Portfolio} onPortfolioUpdate={updatePortfolio.bind(this)} />
                            {/* <AccountLanding account={Auth.account} user={Auth.user} match={match} portfolio={Auth.portfolio} onPortfolioUpdate={updatePortfolio.bind(this)} /> */}
                        </div>
                    </CSSTransition>
                </Route>
                <Route path={match.path + "/Media/MediaDetails/:accountId/:mediaId"} >
                    <AuthGuard component={MediaDetails} />
                </Route>
            </Switch>
        </div>
    )
}

export default Account