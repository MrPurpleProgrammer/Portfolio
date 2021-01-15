import React, { Component } from 'react';

class LightModeButton extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            currentMode: 'day',
        };
    }
    componentDidMount() {
        this.handleToggle();
    }
    handleToggle() {
        console.log(this.state.currentMode);
        if (this.state.currentMode == 'night') {
            this.setState({ currentMode: 'day' });
            document.documentElement.style.setProperty("--primary-background-color", "#fff1cf")
            document.documentElement.style.setProperty("--secondary-background-color", "#ffd369")
            document.documentElement.style.setProperty("--dark-background-color", "#000")
            document.documentElement.style.setProperty("--primary-icon-color", "#263f44")
            document.documentElement.style.setProperty("--primary-text-color", "#263f44")
            document.documentElement.style.setProperty("--secondary-text-color", "#0c1e48")
            document.documentElement.style.setProperty("--highlight-background-color", "#0c1e48")
            document.documentElement.style.setProperty("--highlight-border-color", "#122E75")
        }
        else if (this.state.currentMode == 'day') {
            this.setState({ currentMode: 'night' });
            document.documentElement.style.setProperty("--primary-background-color", "#09183c")
            document.documentElement.style.setProperty("--secondary-background-color", "#0c1e48")
            document.documentElement.style.setProperty("--dark-background-color", "#081229")
            document.documentElement.style.setProperty("--primary-icon-color", "#ff0051")
            document.documentElement.style.setProperty("--primary-text-color", "#fff")
            document.documentElement.style.setProperty("--secondary-text-color", "#b7b7b7")
            document.documentElement.style.setProperty("--highlight-background-color", "#0c1e48")
            document.documentElement.style.setProperty("--highlight-border-color", "#122E75")
        }
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