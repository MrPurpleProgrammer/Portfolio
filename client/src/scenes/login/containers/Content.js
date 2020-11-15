import React, { Component, useState } from 'react';
import Logo from '../../../components/PortfolioLibrary/logo/Logo';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import $ from 'jquery';
import is from 'is_js';
import { authenticateAccount } from '../../../api/auth'

function Content(props) {
    let location = useLocation();
    let history = useHistory();
    const [Form, setForm] = useState({});
    let altLoginOptions = () => {
        $('#formMainLoginInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#formMainLoginInputs').hide();
                $('#divAltLoginInputs').show().animate({ opacity: 1, height: '260px' }, 700);
            });
        $('#btnLogin').hide();
        $('#btnBack').show();
        $('#divAltLoginOption').fadeOut(500);
    }
    let mainLoginOptions = () => {
        $('#divAltLoginInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divAltLoginInputs').hide();
                $('#formMainLoginInputs').show().animate({ opacity: 1, height: '120px' }, 700);
            });
        $('#btnBack').hide();
        $('#btnLogin').show();
        $('#divAltLoginOption').fadeIn(500);
    }
    let isFormValid = (formArray) => {
        let nullCounter = 0;
        formArray.forEach((e) => {
            let obj = $('#' + e.name);
            if (obj.length > 0) {
                obj.each((i, elm) => {
                    let elmId = elm.id;
                    if (e.value == null || e.value == "") {
                        let errMsg = $('#' + elmId).attr('data-error');
                        $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                        nullCounter++
                    }
                    else {
                        if (e.name == 'email') {
                            if (is.email(e.value)) {
                                let normMsg = $('#' + elmId).attr('data-norm');
                                $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                            }
                            else {
                                let errMsg = $('#' + elmId).attr('data-error');
                                $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                nullCounter++
                            }
                        }
                        else if (e.name == 'password') {
                            if (is.string(e.value)) {
                                let normMsg = $('#' + elmId).attr('data-norm');
                                $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                            }
                            else {
                                let errMsg = $('#' + elmId).attr('data-error');
                                $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                nullCounter++
                            }
                        }
                        else {
                            let normMsg = $('#' + elmId).attr('data-norm');
                            $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                        }
                    }
                });
            }
        })
        if (nullCounter > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    let handleEnterKeyPress = (event) => {
        if (event.keyCode == 13 || event.which == 13) {
            handleLoginButton()
            event.preventDefault();
        }
    }
    let handleLoginButton = () => {
        let loginForm = $("#formMainLoginInputs").serializeArray();
        if (loginForm) {
            var formJson = {};
            for (var i = 0; i < loginForm.length; i++) {
                formJson[loginForm[i].name] = loginForm[i].value;
            }
            setForm(loginForm);
            if (isFormValid(loginForm) == true) {
                let url = process.env.REACT_APP_SERVER_API_URL + 'auth/user/web2/login';
                fetch(url, {
                    mode: 'cors',
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formJson),
                })
                    .then(res => res.json())
                    .then(resp => {
                        if (resp.res) {
                            if (resp.res.status == 200) {
                                authenticateAccount(resp, () => {
                                    history.push({
                                        pathname: '/Account/Profile/' + resp.res.account._id,
                                    });
                                });
                            }
                            else if (resp.res.status == 401) {
                                loginForm.forEach((e) => {
                                    let obj = $('#' + e.name);
                                    if (obj.length > 0) {
                                        obj.each((i, elm) => {
                                            let elmId = elm.id;
                                            let errMsg = $('#' + elmId).attr('data-401');
                                            $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                        });
                                    }
                                });
                            }
                            else if (resp.res.status == 402) {
                                loginForm.forEach((e) => {
                                    let obj = $('#' + e.name);
                                    if (obj.length > 0) {
                                        obj.each((i, elm) => {
                                            let elmId = elm.id;
                                            let errMsg = $('#' + elmId).attr('data-402');
                                            $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                        });
                                    }
                                });
                            }
                            else {
                                loginForm.forEach((e) => {
                                    let obj = $('#' + e.name);
                                    if (obj.length > 0) {
                                        obj.each((i, elm) => {
                                            let elmId = elm.id;
                                            $('#' + elmId).attr('placeholder', resp.res.error).val('').addClass('inputErrorTypeTwo')
                                        });
                                    }
                                });
                            }
                        }
                        else {
                            loginForm.forEach((e) => {
                                let obj = $('#' + e.name);
                                if (obj.length > 0) {
                                    obj.each((i, elm) => {
                                        let elmId = elm.id;
                                        let errMsg = $('#' + elmId).attr('data-error');
                                        $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                    });
                                }
                            });
                        }
                    });
            }
        }
    };
    return (
        <div id="divLoginBox" className="loginContainer">
            <Logo hoverActive={false} scene='login' />
            <div className="loginWelcomeText">
                <h1>Welcome Back!</h1>
                <p>Input your credentials to log in.</p>
            </div>
            <div className="loginInputParent">
                <form id="formMainLoginInputs" name="authenticateUserWeb2Login" style={{ display: 'block' }}>
                    <div className="loginInputs">
                        <input id="email" type="email" name="email" onKeyDown={handleEnterKeyPress} placeholder="Email" data-error="Invalid Email" data-norm="Email" data-401="Email Does Not Exist" data-402='Try Again' />
                    </div>
                    <div className="loginInputs">
                        <input id="password" type="password" name="password" onKeyDown={handleEnterKeyPress} placeholder="Password" data-error="Invalid Password" data-norm="Password" data-401="Try Again" data-402='Password Does Not Match the Username.' />
                    </div>
                </form>
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
                    <button id="btnLogin" className="loginButton" onClick={handleLoginButton}>
                        <p style={{ margin: '0px' }}>Login</p>
                    </button>
                    <button id="btnBack" style={{ display: 'none' }} className="loginButton" onClick={mainLoginOptions}>
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
                <button id="btnAltLogin" className="altLoginButton" onClick={altLoginOptions}>
                    <h1>Alternative Login Options</h1>
                    <p>Web3 Wallets, Hardware Wallets, Social Media</p>
                </button>
            </div>
        </div>
    )
}

export default Content;