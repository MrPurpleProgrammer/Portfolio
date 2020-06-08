import React, { Component } from 'react';
import AccountButton from '../accountButton/AccountButton.js';
import ContactButton from '../contactButton/ContactButton.js';
import LearnButton from '../learnButton/LearnButton.js';

class NavMenu extends Component {
    render() {
        return (
            <nav>
                <div id="divContent" className="navMenuLayout">
                    <div className="contactButton_PublicParent"><LearnButton /></div>
                    <div className="contactButton_PublicParent"><ContactButton /></div>
                    <div className="accountButton_PublicParent"><AccountButton status={this.props.route} /></div>
                </div>
            </nav>
        );
    }
}
export default NavMenu;