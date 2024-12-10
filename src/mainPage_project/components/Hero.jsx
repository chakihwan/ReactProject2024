import React from "react";
import bgImage from '../imgs/bg.jpg'

function Hero(){
    return(
        <div className="hero" style={{backgroundImage: `url(${bgImage}`}}>
            <h1>우리 주원이좀 보세요.</h1>
            <p>♥♥♥♥♥♥♥♥♥♥♥♥</p>
        </div>
    );
}

export default Hero;