import React, { Component } from 'react';
import Header from "./containers/Header.js";
import Content from "./containers/Content.js";
import Footer from "./containers/Footer.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Login extends Component {
    render() {
        return (
            <CSSTransition
                in={true}
                appear={true}
                timeout={2000}
                classNames="fade"
            >
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
            </CSSTransition>
        );
    }
}
export default Login;