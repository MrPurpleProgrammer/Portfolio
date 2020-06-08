import React, { Component } from 'react';
import { TweenMax, Power2, Elastic} from "gsap";
import { NavLink } from 'react-router-dom';

class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
    }
    attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
    }
    calculatePosition() {
        TweenMax.set(this.el, {
            x: 0,
            y: 0,
            scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
    }
    onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.6 : 0.6);
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < (this.width * hoverArea)) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }
    onHover(x, y) {
        TweenMax.to(this.el, 0.4, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: 1.15,
            ease: Power2.easeOut
        });
        this.el.style.zIndex = 10;
    }
    onLeave() {
        TweenMax.to(this.el, 0.5, {
            x: 0,
            y: 0,
            scale: 1,
            ease: Elastic.easeOut.config(0.2, 0.4)
        });
        this.el.style.zIndex = 1;
    }
}
class LearnButton extends Component {
    componentDidMount() {
        const btn1 = document.querySelector('#btnLearnButton');
        new HoverButton(btn1);
    }
    render() {
        return (
            <div id="divLearnButton">
                <button id="btnLearnButton" className="headerButton">
                    <NavLink to='/Learn' className="headerButttonLink">Learn More</NavLink>
                </button>
            </div>
        );
    }
}
export default LearnButton;