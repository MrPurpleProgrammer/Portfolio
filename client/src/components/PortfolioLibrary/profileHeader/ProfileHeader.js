import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import ProfileButton from '../profileButton/ProfileButton';
import NavMenu from '../../../components/PortfolioLibrary/navmenu/NavMenu.js';

class ProfileHeader extends Component {
    componentDidMount() {
    }
    render() {
        if (this.props.sceneState == 'account') {
            return (
                <div id="divHeader" className="headerLayout">
                    <div className="portfolioLogo"><Logo hoverActive={false} scene="account" /></div>
                    <div className="profileDiv"><ProfileButton /></div>
                </div>
            )
        }
        else if (this.props.sceneState == 'public') {
            return (
                <div id="divContent" className="headerLayout">
                    <div className="portfolioLogo_PublicParent"><Logo hoverActive={true} scene="public" /></div>
                    <div className="navMenu_PublicParent"><NavMenu route='Login' /></div>
                </div>
            )
        }
    }
}
export default ProfileHeader;