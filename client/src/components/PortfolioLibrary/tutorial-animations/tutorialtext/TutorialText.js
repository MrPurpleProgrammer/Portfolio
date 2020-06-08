import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class TutorialText extends Component {
    render() {
        if (this.props.tutorialStep == 0) {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={0}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divAnimationText" className="tutorialText">
                            <div id="divStepOneText">
                                <div className="tutorialText_Title">
                                    Step One: Upload Your Media Into Portfolio
                                    </div>
                                <div className="tutorialText_Description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
        else if (this.props.tutorialStep == 1) {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={1}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divAnimationText" className="tutorialText">
                            <div id="divStepOneText">
                                <div className="tutorialText_Title">
                                    Step One: Upload Your Media Into Portfolio
                                    </div>
                                <div className="tutorialText_Description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
        else if (this.props.tutorialStep == 2) {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={2}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divAnimationText" className="tutorialText">
                            <div id="divStepOneText">
                                <div className="tutorialText_Title">
                                    Step One: Upload Your Media Into Portfolio
                                    </div>
                                <div className="tutorialText_Description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
        else if (this.props.tutorialStep == 3) {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={3}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divAnimationText" className="tutorialText">
                            <div id="divStepOneText">
                                <div className="tutorialText_Title">
                                    Step One: Upload Your Media Into Portfolio
                                    </div>
                                <div className="tutorialText_Description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
        else if (this.props.tutorialStep == 4) {
            return (
                <TransitionGroup>
                    <CSSTransition
                        key={4}
                        timeout={2000}
                        classNames="fade"
                    >
                        <div id="divAnimationText" className="tutorialText">
                            <div id="divStepOneText">
                                <div className="tutorialText_Title">
                                    Step One: Upload Your Media Into Portfolio
                                    </div>
                                <div className="tutorialText_Description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )
        }
    }
}
export default TutorialText;