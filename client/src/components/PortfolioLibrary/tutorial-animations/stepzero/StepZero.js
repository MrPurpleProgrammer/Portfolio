import React from 'react';
import { useSpring, animated } from 'react-spring';
import largelogo from 'client/src/assets/Images/largelogo.png';
import "./stepzero.css"
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`

function LandingPage() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass:20, tension: 550, friction: 450 } }))
    return (
      <div id="divAnimation" class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div class="particlebg" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div class="iconsbg" style={{ transform: props.xy.interpolate(trans2) }} />
        <div className="title">
      
     <img src={largelogo} alt="Logo" />
     </div>
      </div>
    )
  }
  
  export default LandingPage;