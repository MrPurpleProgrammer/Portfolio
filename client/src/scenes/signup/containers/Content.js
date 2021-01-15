import React, { Component, useState } from 'react';
import Logo from '../../../components/PortfolioLibrary/logo/Logo';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import InputMask from 'react-input-mask';
import is from 'is_js';
import { API_Signup } from '../../../api/account';
const { Wallet } = require('portfolio_dmct');
require('dotenv').config()

function Content(props) {
    let location = useLocation();
    let history = useHistory();
    const [Form, setForm] = useState([]);
    let nextSignupOptions = () => {
        $('#formMainSignupInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#formMainSignupInputs').hide();
                $('#divNextSingupInputs').show().animate({ opacity: 1, height: '340px' }, 700);
            });
        $('#btnNext').hide();
        $('#btnSignup').show();
        $('#btnCancel').hide();
        $('#btnBack').show();
    }
    let mainSignupOptions = () => {
        $('#divNextSingupInputs').animate({ opacity: 0, height: '0px' }, 500,
            function () {
                $('#divNextSingupInputs').hide();
                $('#formMainSignupInputs').show().animate({ opacity: 1, height: '320px' }, 700);
            });
        $('#btnSignup').hide();
        $('#btnNext').show();
        $('#btnBack').hide();
        $('#btnCancel').show();
    }
    let isFormValid = (formArray) => {
        console.log(formArray);
        let nullCounter = 0;
        formArray.forEach((e) => {
            let obj = $('#' + e.name);
            if (obj.length > 0) {
                obj.each((i, elm) => {
                    let elmId = elm.id;
                    if (e.value == null || e.value == "") {
                        let errMsg = $('#' + elmId).attr('data-emptyErr');
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
                                let errMsg = $('#' + elmId).attr('data-notEmail');
                                $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                nullCounter++
                            }
                        }
                        else if (e.name == 'phoneNumber') {
                            if (is.nanpPhone(e.value) || is.eppPhone(e.value)) {
                                let normMsg = $('#' + elmId).attr('data-norm');
                                $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                            }
                            else {
                                let errMsg = $('#' + elmId).attr('data-emptyErr');
                                $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                nullCounter++
                            }
                        }
                        else if (e.name == 'password') {
                            if (e.value.length > 6 && is.regexp(/\d/)) {
                                let normMsg = $('#' + elmId).attr('data-norm');
                                $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                            }
                            else {
                                let errMsg = $('#' + elmId).attr('data-ruleValidation');
                                $('#' + elmId).attr('placeholder', errMsg).val('').addClass('inputErrorTypeTwo')
                                nullCounter++
                            }
                        }
                        else if (e.name == 'confirmPassword') {
                            if (e.value == $('#password').val()) {
                                let normMsg = $('#' + elmId).attr('data-norm');
                                $('#' + elmId).attr('placeholder', normMsg).removeClass('inputErrorTypeTwo');
                            }
                            else {
                                let errMsg = $('#' + elmId).attr('data-noMatch');
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
    async function getArtisanId() {
        let wallet = new Wallet(window);
        let web3 = await wallet.initiateWeb3();
        return web3.account;
    }
    let handleWeb3Button = async () => {
        let artisanId = await getArtisanId();
        if (artisanId == false) $('#iMetamaskStatus').removeClass('fa-question-circle fa-check-circle accepted').addClass('fa-times-circle rejected');
        else {
            $('#iMetamaskStatus').removeClass('fa-question-circle fa-times-circle rejected').addClass('fa-check-circle accepted');
            let updatedForm = Form;
            let exists = 0;
            updatedForm.forEach((e, i) => {
                if(e.name == 'artsanId') exists++;
            });
            if(exists == 0) {
                updatedForm.push({ name: 'artisanId', value: artisanId });
                setForm(updatedForm);
                console.log(artisanId, Form);
            }
        }
    }
    let handleNextButton = () => {
        let signupFormStepOne = $("#formMainSignupInputs").serializeArray();
        if (signupFormStepOne) {
            var formJson = {};
            for (var i = 0; i < signupFormStepOne.length; i++) {
                formJson[signupFormStepOne[i].name] = signupFormStepOne[i].value;
            }
            setForm(signupFormStepOne);
            if (isFormValid(signupFormStepOne) == true) {
                nextSignupOptions();
            }
        }
    }
    let handleSignupError = (json) => {
        console.log(json);
    }
    let handleSignupButton = async () => {
        let signupForm = Form;
        var formJson = {};
        for (var i = 0; i < signupForm.length; i++) {
            formJson[signupForm[i].name] = signupForm[i].value;
        }
        setForm(signupForm);
        await API_Signup(formJson).then(() => {
            history.push('/Client/Login');
        })
    }
    return (
        <div id="divSignupBox" className="signupContainer">
            <Logo hoverActive={false} scene='login' />
            <div className="signupWelcomeText">
                <h1>Create an Account</h1>
                <p>Take the first step to claiming your content</p>
            </div>
            <div className="loginInputParent">
                <div id="divSignup">
                    <form id="formMainSignupInputs" name="createUser" style={{ display: 'block' }}>
                        <div className="signupInputs">
                            <input id="username" type="text" name="username" placeholder="Username" data-norm="Username" data-emptyErr="Enter a Valid Username" />
                        </div>
                        <div className="signupInputs">
                            <input id="email" type="email" name="email" placeholder="Email" data-norm="Email" data-emptyErr="Enter a Valid Email" data-notEmail="Thats not an Email, try again." />
                        </div>
                        <div className="signupInputs">
                            <input id="password" type="password" name="password" placeholder="Password" data-norm="Password" data-emptyErr="Enter a Valid Password" data-ruleValidation="Your Password is weak, try again."/>
                        </div>
                        <div className="signupInputs">
                            <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" data-norm="Confirm Password" data-emptyErr="Confirm Password" data-noMatch="Doesnt match the password, try again." />
                        </div>
                        <div className="signupInputs">
                            <InputMask mask="(999)-999-9999" maskChar=''>
                                {(inputProps) => <input {...inputProps} id="phoneNumber" type="tel" name="phoneNumber" placeholder="Phone Number" data-norm="Phone Number" data-emptyErr="Enter a Valid Phone Number" disableUnderline />}
                            </InputMask>
                        </div>
                    </form>
                    <div id="divNextSingupInputs" style={{ display: 'none', height: '0px' }}>
                        <div className="altbuttonContainer">
                            <button id="btnConnectMetamask" className="altSignupButton mt10" onClick={handleWeb3Button}>
                                <h1>Connect with Metamask</h1>
                                <i id='iMetamaskStatus' className="fas fa-question-circle"></i>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectDapper" className="altButtonDisabled altSignupButton mt10">
                                <h1>Connect with Dapper</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectLedger" className="altButtonDisabled altSignupButton mt10">
                                <h1>Connect with Ledger Wallet</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectTrezor" className="altButtonDisabled altSignupButton mt10">
                                <h1>Connect with Trezor Wallet</h1>
                            </button>
                        </div>
                        <div className="altbuttonContainer">
                            <button id="btnConnectKeystore" className="altButtonDisabled altSignupButton mt10">
                                <h1>Connect with a Keystore File</h1>
                            </button>
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <button id="btnNext" className="signupButton" onClick={handleNextButton}>
                            <p style={{ margin: '0px' }}>Next Step</p>
                        </button>
                        <button id="btnSignup" className="signupButton" style={{ display: 'none' }} onClick={handleSignupButton}>
                            <p style={{ margin: '0px' }}>Signup</p>
                        </button>
                        <Link to="/Client/Login" className="">
                            <button id="btnCancel" className="cancelButton">Cancel</button>
                        </Link>
                        <button id="btnBack" className="cancelButton" style={{ display: 'none' }} onClick={mainSignupOptions}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;