import React, { Component } from 'react';
import Logo from '../../../components/PortfolioLibrary/logo/Logo';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Content extends Component {
    altLoginOptions = () => {
        $('#divMainLoginInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divMainLoginInputs').hide();
                $('#divAltLoginInputs').show().animate({ opacity: 1, height: '260px' }, 700);
            });
        $('#btnLogin').hide();
        $('#btnBack').show();
        $('#divAltLoginOption').fadeOut(500);
    }
    mainLoginOptions = () => {
        $('#divAltLoginInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divAltLoginInputs').hide();
                $('#divMainLoginInputs').show().animate({ opacity: 1, height: '120px' }, 700);
            });
        $('#btnBack').hide();
        $('#btnLogin').show();
        $('#divAltLoginOption').fadeIn(500);
    }
    render() {
        return (
            <div id="divLoginBox" className="loginContainer">
                <Logo hoverActive={false} scene='login' />
                <div className="loginWelcomeText">
                    <h1>Welcome Back!</h1>
                    <p>Input your credentials to log in.</p>
                </div>
                <div className="loginInputParent">
                    <div id="divMainLoginInputs" style={{ display: 'block' }}>
                        <div className="loginInputs">
                            <input id="loginEmail" type="email" name="emailaddress" placeholder="Email" />
                        </div>
                        <div className="loginInputs">
                            <input id="loginPassword" type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div id="divAltLoginInputs" style={{ display: 'none', height: '0px' }}>
                        <div className="altbuttonContainer">
                            <button id="btnAltLogin" className="altLoginButton mt10">
                                <h1>Login with Web Extensions</h1>
                                <p>Use a web3 wallet like Metamask or Dapper</p>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnAltLogin" className="altLoginButton mt10">
                                <h1>Login with Hardware Wallet</h1>
                                <p>Use a hardware wallet like Trezor or Ledger</p>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnAltLogin" className="altLoginButton mt10">
                                <h1>Login with Software</h1>
                                <p>Keystore File, Private Key, Mnemonic Phrase</p>
                            </button>
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <Link to="/Account/User?UserGuid=12345" className="">
                            <button id="btnLogin" className="loginButton">
                                <p style={{ margin: '0px' }}>Login</p>
                            </button>
                        </Link>
                        <button id="btnBack" style={{ display: 'none' }} className="loginButton" onClick={this.mainLoginOptions}>
                            <i style={{ fontsize: '25px' }} className="fas fa-long-arrow-alt-left"></i>
                        </button>
                        <Link to="/Signup" className="">
                            <button id="btnCreateAccount" className="createAccountButton">Create an Account</button>
                        </Link>
                    </div>
                    <div className="loginOptions">
                        <div className="divRememberMe boxes checkBox_RememberMe">
                            <input type="checkbox" id="box-1" />
                            <label htmlFor="box-1">Remember Me</label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
                <div id="divAltLoginOption" className="altbuttonContainer">
                    <button id="btnAltLogin" className="altLoginButton" onClick={this.altLoginOptions}>
                        <h1>Alternative Login Options</h1>
                        <p>Web3 Wallets, Hardware Wallets, Social Media</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Content;