import React from "react";
import Card from "./Card";
import img1 from '../imgs/imgs1.jpg'
import img2 from '../imgs/imgs2.jpg'
import img3 from '../imgs/imgs3.jpg'
import img4 from '../imgs/imgs4.jpg'
import img5 from '../imgs/imgs5.jpg'
import img6 from '../imgs/imgs6.jpg'
import img7 from '../imgs/imgs7.jpg'
import img8 from '../imgs/imgs8.jpg'



const listings =[
    {
        id:1,
        title:"?",
        imageUrl: `${img1}`
    },
    {
        id:2,
        title:"?",
        imageUrl: `${img2}`
    },
    {
        id:3,
        title:"?",
        imageUrl: `${img3}`
    },
    {
        id:4,
        title:"?",
        imageUrl: `${img4}`
    },
    {
        id:5,
        title:"?",
        imageUrl: `${img5}`
    },
    {
        id:6,
        title:"?",
        imageUrl: `${img6}`
    },
    {
        id:7,
        title:"?",
        imageUrl: `${img7}`
    },
    {
        id:8,
        title:"?",
        imageUrl: `${img8}`
    },


];

function CardContainer(){
    return(
        <div className="card-container">
            {listings.map(listing =>(
                <Card key = {listing.id} {...listing}/>
            ))}
        </div>
    )
}

export default CardContainer;