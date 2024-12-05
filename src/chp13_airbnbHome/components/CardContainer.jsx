import React from "react";
import Card from "./Card";
import apt1 from '../imgs/apt1.jpg'
import oceanview1 from '../imgs/oceanview1.jpg'
import oceanview2 from '../imgs/oceanview2.jpg'


const listings =[
    {
        id:1,
        title:"서울의 아늑한 아파트",
        price:100000,
        rating:4.9,
        imageUrl: `${apt1}`
    },
    {
        id:2,
        title:"바다 뷰 펜션1",
        price:150000,
        rating:4.8,
        imageUrl: `${oceanview1}`
    },
    {
        id:3,
        title:"바다 뷰 펜션2",
        price:130000,
        rating:4.3,
        imageUrl: `${oceanview2}`
    }

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