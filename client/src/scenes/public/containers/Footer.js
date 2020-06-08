import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://facebook.com/" className="link facebook" target="_parent"><i className="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com/" className="link twitter" target="_parent"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com/" className="link google-plus" target="_parent"><i className="fab fa-instagram"></i></a>
            </div>
        );
    }
}

export default Footer;