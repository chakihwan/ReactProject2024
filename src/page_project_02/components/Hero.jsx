import React from 'react';
import bgImage from '../imgs/bg.jpg';

function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1>사랑스러운 아기 갤러리</h1>
            <p>세상에서 가장 귀여운 순간들을 만나보세요.</p>
        </div>
    );
}

export default Hero;