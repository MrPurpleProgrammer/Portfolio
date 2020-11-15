import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class ShareButton extends Component {
    constructor(props) {
        this.state = {
            active: false,
        }
    }
    toggleState = () => {
        if(this.state.active == true) this.setState({active: false});
        else {
            this.setState({active: true});
        }
    }
    render() {
        return (
            <div id={"menuButton_1_" + this.props.mediaId} className="menuButton activeButton" onClick={this.props.active(this.state.active)}>
                <p>Share</p>
                <i className="fas fa-star"></i>
            </div>
        );
    }
}
export default ShareButton
