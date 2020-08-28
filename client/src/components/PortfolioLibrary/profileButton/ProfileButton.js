import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileButton extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <button id="btnAccountButton" className="accountModuleButton">
                <i className="fas fa-user"></i>
            </button>
        )
    }
}
export default ProfileButton;