import React, { Component } from 'react';
import TutorialAnimation from '../../../components/PortfolioLibrary/tutorial-animations/TutorialAnimation.js';
import TutorialText from '../../../components/PortfolioLibrary/tutorial-animations/tutorialtext/TutorialText.js';
import NavigationDots from '../../../components/VarsunLibrary/navigationDots/NavigationDots.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function showScrollPosition(elm) {
    var parent = elm.parentNode,
        pos = (elm.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight) * 100;
    return Math.round(pos);
}
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            stepNumber: 0,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        var pos = showScrollPosition(document.body);
        var newStep;
        if (pos >= 0 && pos < 20) newStep = 0;
        else if (pos >= 20 && pos < 40) newStep = 1;
        else if (pos >= 40 && pos < 60) newStep = 2;
        else if (pos >= 60 && pos < 80) newStep = 3;
        else if (pos >= 80 && pos < 101) newStep = 4;
        this.setState({
            prevScrollPos: currentScrollPos,
            stepNumber: newStep,
        });
        console.log(this.state, pos);
    }
    render() {
        return (
            <div id="divTutorialContent" className="parentContent">
                <div className="tutorialAnimation">
                    <NavigationDots numberOfDots={5} names={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]} state={this.state.stepNumber} links={[0, 3000, 5000, 7000, 10000]} class="navigationDots" />
                    <CSSTransition
                        in={true}
                        appear={true}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divTutorialSteps" className="tutorialSteps fade">
                            <TutorialAnimation tutorialStep={this.state.stepNumber} />
                            <TutorialText tutorialStep={this.state.stepNumber} />
                        </div>
                    </CSSTransition>
                </div>
            </div>
        );
    }
}

export default Content;