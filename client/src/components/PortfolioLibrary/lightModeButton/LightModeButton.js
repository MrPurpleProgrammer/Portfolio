import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LightModeButton extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            currentMode: 'day',
        };
    }
    componentDidMount() {
    }
    handleToggle() {
        console.log(this.state.currentMode);
        if(this.state.currentMode == 'night') this.setState({currentMode: 'day'});
        else if(this.state.currentMode == 'day') this.setState({currentMode: 'night'});
    }
    render() {
        return (
            <button id="btnViewModeButton" className="accountModuleButton" onClick={this.handleToggle}>
                {this.state.currentMode === 'day' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
        )
    }
}
export default LightModeButton;