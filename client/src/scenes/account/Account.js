import React, { Component } from "react";
import AccountLanding from "./containers/AccountLanding.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import { isAuthenticatedAccount } from '../../api/auth';
import { getAccount } from "../../api/account.js";
import MediaDetails from "./containers/MediaDetails.js";
import Upload from "../upload/Upload.js";

class Account extends Component {
    _isMounted = false;
    constructor(props,) {
        super(props)
        this.state = {
            account: null,
            user: null,
            loading: null,
            portfolio: []
        }
    }
    componentDidMount() {
        this._isMounted = true;
        this.setState({ loading: true })
        let accountId = isAuthenticatedAccount().res.account._id;
        let token = isAuthenticatedAccount().token;
        getAccount(token, accountId).then((resp) => {
            if (this._isMounted) this.setState({ loading: false, account: resp.account, user: resp.user, portfolio: resp.user.portfolio })
        });
    }

    updatePortfolio(portfolio) {
        this.setState({portfolio: portfolio})
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if (this.state.loading == true || this.state.loading == null) {
            return (
                <div className="accountSceneContainer">
                    <div className="loadingDiv">
                        <h1>Loading...</h1>
                    </div>
                </div>
            )
        }
        if (this.state.loading == false) {
            if (this.state.account) {
                return (
                    <Switch>
                        <Route path={this.props.match.path + "/Profile/:accountId"}>
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={2000}
                                classNames="fade"
                            >
                                <div className="accountSceneContainer">
                                    <AccountLanding account={this.state.account} user={this.state.user} match={this.props.match} portfolio={this.state.user.portfolio} onPortfolioUpdate={this.updatePortfolio.bind(this)}/>
                                </div>
                            </CSSTransition>
                        </Route>
                        <Route path={this.props.match.path + "/Media/MediaDetails/:accountId/:mediaId"} >
                            <MediaDetails account={this.state.account} user={this.state.user}/>
                        </Route>
                    </Switch>
                );
            }
            else {
                return (
                    <Redirect to="/Login" />
                );
            }
        }
    }
}

export default Account