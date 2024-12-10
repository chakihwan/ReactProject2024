import React from 'react';

function Card({ title, age, cuteness, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{age}개월</p>
            <p>귀여움 점수: ★ {cuteness}</p>
        </div>
    );
}

export default Card;