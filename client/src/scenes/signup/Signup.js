import React, { Component } from 'react';
import Header from "./containers/Header.js";
import Content from "./containers/Content.js";
import Footer from "./containers/Footer.js";
class Login extends Component {
    render() {
        return (
            <div className="loginSceneContainer">
                <div id="publicHeader">
                    <Header />
                </div>
                <div id="publicContent" className="loginContentContainer">
                    <Content />
                </div>
                <div id="publicFooter">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default Login;