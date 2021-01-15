import React, { Component } from 'react';
import "./navigation_dots.scss";
import $ from 'jquery';
class NavigationLI extends Component {
    render() {
        return (
            <div>
                <li onClick={() => { window.scrollTo(0, this.props.location) }}>
                    <a className={(this.props.state == this.props.activeState) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == this.props.activeState) ? "active_text" : ""}> {this.props.name} </p>
                </li>
            </div>
        )
    }
}
class NavigationUL extends Component {
    renderul(numberOfDots) {
        var j = 0;
        var renderedUL = [];
        for (j=0; j < numberOfDots; j++) {
            renderedUL.push(
                <NavigationLI state={this.props.state} name={this.props.names[j]} key={j} activeState={j} location={this.props.links[j]} />
            );
        }
        return renderedUL
    }
    render() {
        return (
            <ul>
                {this.renderul(this.props.numberOfDots)}
                {/* <li onClick={() => { window.scrollTo(0,0) }}>
                    <a className={(this.props.state == 0) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == 0) ? "active_text" : ""}> -- Step 0 </p>
                </li>
                <li onClick={() => { window.scrollTo(0,3000) }}>
                    <a className={(this.props.state == 1) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == 1) ? "active_text" : ""}> -- Step 1 </p>
                </li>
                <li onClick={() => { window.scrollTo(0,5000) }}>
                    <a className={(this.props.state == 2) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == 2) ? "active_text" : ""}> -- Step 2 </p>
                </li>
                <li onClick={() => { window.scrollTo(0,7000) }}>
                    <a className={(this.props.state == 3) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == 3) ? "active_text" : ""}> -- Step 3 </p>
                </li>
                <li onClick={() => { window.scrollTo(0,10000) }}>
                    <a className={(this.props.state == 4) ? "active_dot" : ""}></a>
                    <p className={(this.props.state == 4) ? "active_text" : ""}> -- Step 4 </p>
                </li> */}
            </ul>
        )
    }
}
class NavigationDots extends Component {
    componentDidMount() {
        $('.navigationDots ul').hover(function () {
            $('.navigationDots p').fadeIn(800);
        }, function () {
            $('.navigationDots p').fadeOut(800);
        });
    }
    render() {
        return (
            <div id="divNavigation" className={this.props.class}>
                <NavigationUL numberOfDots={this.props.numberOfDots} names={this.props.names} state={this.props.state} links={this.props.links} />
            </div>
        );
    }
}
export default NavigationDots;