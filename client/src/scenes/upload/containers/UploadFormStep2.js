import React, { Component, useState } from 'react';
import $ from 'jquery';
import { Redirect, useHistory } from 'react-router-dom';

function UploadFormStep2(props) {
    $(function () {
        $('.checkbox_Style1_Label').on('click', function () {
            $(this).toggleClass('checkboxActive');
            $(this).parent().find('.checkbox_Style1_Input').toggleClass('check')
        })
    })
    $(function () {
        $('.check').on('click', function() {
            $(this).prop('checked', true);
        })
    })
    return (
        <div id="divUploadForm_Step2" className="uploadForm">
            <div id="divStepExplanation" className="stepExplainContainer">
                <h1>
                    These are the Terms...
                </h1>
                <div id="terms-and-conditions" className="textDescription" style={{height: 340}}>
                    <strong>Terms and Conditions</strong>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <strong>Privacy Notice</strong>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                    <p>Cum dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                </div>
            </div>
            <div id="divFormStep_2" className="uploadFormInputContainer">
                <form method="post" name="createCert_Step2" id="formUploadStep2">
                <div className="uploadFormInput"> 
                    <label>Confirm with Account Password:</label>
                    <input id="accountPassword" name="accountPassword" type="password" />
                </div>
                <div className="checkbox_Style1">
                    <input type="checkbox" id="termsAgreeCheck" className="checkbox_Style1_Input" />
                    <label htmlFor="termsAgreeCheck" className="checkbox_Style1_Label" style={{ margin: "15px 0px 40px 0px" }}> I hereby Agree to the Terms and Conditions</label>
                </div>
                </form>
            </div>
        </div>
    );
}
export default UploadFormStep2;