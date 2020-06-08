import React, { Component } from 'react';
import Logo from '../../../components/PortfolioLibrary/logo/Logo.js';
import NavMenu from '../../../components/PortfolioLibrary/navmenu/NavMenu.js';
import ProfileHeader from '../../../components/PortfolioLibrary/profileHeader/ProfileHeader';

class Header extends Component {
    render() { 
        return ( 
            <ProfileHeader sceneState="public" />
        );
    }
}
export default Header;