import React from 'react';
import Card from './Card';
import baby1 from '../imgs/imgs1.jpg';
import baby2 from '../imgs/imgs2.jpg';
import baby3 from '../imgs/imgs3.jpg';
import baby4 from '../imgs/imgs4.jpg';
import baby5 from '../imgs/imgs5.jpg';
import baby6 from '../imgs/imgs6.jpg';
import baby7 from '../imgs/imgs7.jpg';
import baby8 from '../imgs/imgs8.jpg';
import baby9 from '../imgs/imgs9.jpg';

const babyListings = [
    {
        id: 1,
        title: "❤️",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby1,
    },
    {
        id: 2,
        title: "🧡",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby2,
    },
    {
        id: 3,
        title: "💚",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby3,
    },
    {
        id: 4,
        title: "💙",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby4,
    },
    {
        id: 5,
        title: "💜",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby5,
    },
    {
        id: 6,
        title: "🤎",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby9,
    },
    {
        id: 7,
        title: "🖤",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby7,
    },
    {
        id: 8,
        title: "💛",
        age: 14,
        cuteness: 100000000,
        imageUrl: baby8,
    },
];

function CardContainer() {
    return (
        <div className="card-container">
            {babyListings.map(baby => (
                <Card key={baby.id} {...baby} />
            ))}
        </div>
    );
}

export default CardContainer;