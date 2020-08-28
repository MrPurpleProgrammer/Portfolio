import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UploadChart from '../../../components/PortfolioLibrary/uploadChart/UploadChart.js';
import MediaGallery from '../../../components/VarsunLibrary/mediaGallery/MediaGallery';
import ProfileButton from '../../../components/PortfolioLibrary/profileButton/ProfileButton.js';
import Logo from '../../../components/PortfolioLibrary/logo/Logo.js';
import FilterToolbar from '../../../components/VarsunLibrary/filterToolbar/FilterToolbar.js';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';
import { isAuthenticatedAccount } from "../../../api/auth.js";
import {getAccount} from "../../../api/account.js";

class AccountLanding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: {},
            user: {}
        }
    }
    async componentDidMount() {
        let accountId = isAuthenticatedAccount().res.account._id;
        let token = isAuthenticatedAccount().token;
        let accountData = await getAccount(token, accountId);
        this.setState({account: accountData.account, user: accountData.user});
    }
    render() {
        return (
            <div id="accountContent" className="accountContentContainer">
                <ProfileHeader sceneState="account" />
                <div id="divContent">
                    <div id="divAccountContentHeader" className="accountContentHeader">
                        <div id="divAccountDetails" className="accountDetails">
                            <h1 className="accountNameLanding">{this.state.user.username}</h1>
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
                        <FilterToolbar />
                    </div>
                    <div id="divAccountMediaList" className="accountContent">
                        <MediaGallery sort='default' portfolio={this.state.user.portfolio}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountLanding;