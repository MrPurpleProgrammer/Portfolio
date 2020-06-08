import React, {Component} from "react";
import Header from "./containers/Header.js";
import Content from "./containers/Content.js";
import Footer from "./containers/Footer.js";
class Public extends Component {
    render(){
        return(
            <div className="scene_container">
                <div id="publicHeader">
                    <Header/>
                </div>
                <div id="publicContent">
                    <Content/>
                </div>
                <div id="publicFooter">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Public