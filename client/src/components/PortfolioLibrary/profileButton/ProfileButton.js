import React, { Component, useState } from 'react';
import $ from 'jquery';
import {API_SignoutAccount} from '../../../api/storage/auth';
import {useHistory} from 'react-router-dom'

function ProfileButton() {
    const [accountMenuState, setAccountMenuState] = useState(false);
    const history = useHistory();
    let toggleDropDown = () => {
        if (accountMenuState == true) {
            $("#divAccountDropdown").animate({ opacity: 0 }, 400, () => { setAccountMenuState(false); $("#divAccountDropdown").hide(); });
            $("#divAccountDropdownChild").animate({ height: "0%", padding: "0px"}, 400);
            $("#btnAccountButton").css({ color: "#ff0051"});
        }
        else if (accountMenuState == false) {
            $("#divAccountDropdown").show();
            $("#divAccountDropdown").animate({ opacity: 1 }, 300, () => { setAccountMenuState(true) });
            $("#divAccountDropdownChild").animate({ height: "115%", padding: "20px" }, 400);
            $("#btnAccountButton").css({color: "#0d2a6f"});
        }
    }
    let logout = () => {
        API_SignoutAccount();
        history.push({
            pathname: '/Client/Public',
        });
    }
    return (
        <div style={{ display: 'inline' }}>
            <button id="btnAccountButton" className="accountModuleButton" onClick={() => { toggleDropDown() }}>
                <i className="fas fa-user"></i>
            </button>
            <div id="divAccountDropdown" style={{ opacity: 0, display: "none" }}>
                <div className="accountMenuTriangle" />
                <div id="divAccountDropdownChild" className="menuDropdown accountMenu" style={{ height: '0%', padding: "0px" }}>
                    <ul>
                        <li>
                            <i className="fas fa-cog"></i>
                            <p>Settings</p>
                        </li>
                        <li onClick={() => {logout()}}>
                            <i className="fas fa-sign-out-alt"></i>
                            <p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProfileButton;