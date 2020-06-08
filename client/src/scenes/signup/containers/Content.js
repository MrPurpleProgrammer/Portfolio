import React, { Component } from 'react';
import Logo from '../../../components/PortfolioLibrary/logo/Logo';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Content extends Component {
    nextSignupOptions = () => {
        $('#divMainSignupInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divMainSignupInputs').hide();
                $('#divNextSingupInputs').show().animate({ opacity: 1, height: '340px' }, 700);
            });
        $('#btnNext').hide();
        $('#btnSignup').show();
        $('#btnCancel').hide();
        $('#btnBack').show();
    }
    mainSignupOptions = () => {
        $('#divNextSingupInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divNextSingupInputs').hide();
                $('#divMainSignupInputs').show().animate({ opacity: 1, height: '320px' }, 700);
            });
        $('#btnSignup').hide();
        $('#btnNext').show();
        $('#btnBack').hide();
        $('#btnCancel').show();
    }
    render() {
        return (
            <div id="divSignupBox" className="signupContainer">
                <Logo hoverActive={false} scene='login' />
                <div className="signupWelcomeText">
                    <h1>Create an Account</h1>
                    <p>Take the first step to claiming your content</p>
                </div>
                <div className="loginInputParent">
                    <div id="divMainSignupInputs" style={{ display: 'block' }}>
                        <div className="signupInputs">
                            <input id="signupUsername" type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="signupInputs">
                            <input id="signupUsername" type="email" name="emailaddress" placeholder="Email" />
                        </div>
                        <div className="signupInputs">
                            <input id="signupPassword" type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="signupInputs">
                            <input id="signupConfirmPassword" type="password" name="confirmpassword" placeholder="Confirm Password" />
                        </div>
                        <div className="signupInputs">
                            <input id="singupPhoneNumber" type="tel" name="phonenumber" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div id="divNextSingupInputs" style={{ display: 'none', height: '0px' }}>
                        <div className="altbuttonContainer">
                            <button id="btnConnectDapper" className="altSignupButton mt10">
                                <h1>Connect with Dapper</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectMetamask" className="altSignupButton mt10">
                                <h1>Connect with Metamask</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectLedger" className="altSignupButton mt10">
                                <h1>Connect with Ledger Wallet</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectTrezor" className="altSignupButton mt10">
                                <h1>Connect with Trezor Wallet</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectKeystore" className="altSignupButton mt10">
                                <h1>Connect with a Keystore File</h1>
                            </button>
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <button id="btnNext" className="signupButton" onClick={this.nextSignupOptions}>
                            <p style={{ margin: '0px' }}>Next Step</p>
                        </button>
                        <Link to='/Login' className="">
                            <button id="btnSignup" className="signupButton" style={{ display: 'none' }}>
                                <p style={{ margin: '0px' }}>Signup</p>
                            </button>
                        </Link>
                        <Link to="/Login" className="">
                            <button id="btnCancel" className="cancelButton">Cancel</button>
                        </Link>
                        <button id="btnBack" className="cancelButton" style={{display:'none'}} onClick={this.mainSignupOptions}>Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;