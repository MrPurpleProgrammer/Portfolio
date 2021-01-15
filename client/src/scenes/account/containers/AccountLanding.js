import React, { Component, lazy, Suspense, createRef } from "react";
import UploadChart from '../../../components/PortfolioLibrary/uploadChart/UploadChart.js';
import FilterToolbar from '../../../components/VarsunLibrary/filterToolbar/FilterToolbar.js';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import { API_IsAuthenticatedAccount } from '../../../api/storage/auth';
import { API_GetAccount } from "../../../api/account.js";
import MediaGallery from '../../../components/VarsunLibrary/mediaGallery/MediaGallery';
import $ from 'jquery';

const MediaGalleryLazy = lazy(() => import('../../../components/VarsunLibrary/mediaGallery/MediaGallery'));

class AccountLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: this.props.account,
            user: this.props.user,
            isUserNew: null,
        };
        this.toolBar = React.createRef();
    }

    componentDidMount() {
        let accountId = API_IsAuthenticatedAccount().res.account._id;
        let token = API_IsAuthenticatedAccount().token;
        API_GetAccount(token, accountId).then((resp) => {
            this.props.onPortfolioUpdate(resp.user.portfolio);
            if (resp.user.portfolio.length > 0) this.setState({ isUserNew: false });
            else {
                this.setState({ isUserNew: true });
                this.toolBar.current.toggleToolbar();
            }
        });
    }
    render() {
        return (
            <div id="accountContent" className="accountContentContainer">
                <ProfileHeader sceneState="account" />
                <div id="divContent">
                    <div id="divAccountContentHeader" className="accountContentHeader">
                        <div id="divAccountDetails" className="accountDetails">
                            <h1 className="accountNameLanding">{this.props.auth.user.username}</h1>
                            <div id="divAccountMetrics" className="metricsContainer">
                                <div id="divAccountBadges" className="accountBadges">
                                    <i className="fas fa-award"></i>
                                    <p>326</p>
                                    <i className="fas fa-clone"></i>
                                    <p>5,489</p>
                                    <i className="fas fa-download"></i>
                                    <p>1,289,762</p>
                                    <i className="fas fa-thumbs-up"></i>
                                    <p>570,870</p>
                                    <i className="fas fa-star"></i>
                                    <p>34,000</p>
                                    <i className="fas fa-comment"></i>
                                    <p>23,489</p>
                                    <i className="fas fa-users"></i>
                                    <p>5,600</p>
                                </div>
                                <div id="divUploadAnalytics" className="uploadAnalytics">
                                    <UploadChart />
                                </div>
                            </div>
                        </div>
                        <div id='divFilterToolbar'>
                            <FilterToolbar match={this.props.match} accountId={this.props.auth.account._id} isUserNew={this.state.isUserNew} ref={this.toolBar} />
                        </div>
                    </div>
                    <div id="divAccountMediaList" className="accountContent">
                        {
                            this.state.isUserNew ?
                                <MediaGallery sort='default' portfolio={this.props.portfolio} match={this.props.match} account={this.props.auth.account} isUserNew={this.state.isUserNew} username={this.props.auth.user.username} />
                                :
                                <Suspense fallback={<h1>Still Loading…</h1>}>
                                    <MediaGalleryLazy sort='default' portfolio={this.props.portfolio} match={this.props.match} account={this.props.auth.account} isUserNew={this.state.isUserNew} username={this.props.auth.user.username} />
                                </Suspense>
                        }

                    </div>
                </div>
            </div >
        );
    }
}

export default AccountLanding;