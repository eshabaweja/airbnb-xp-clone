import React from "react";


export default function Card(props) {
    /* let image = `../images/${props.img}`;
    console.log(image); */
    
    return (
        <div className="card">

            <img className="card--image" src={require(`../images/${props.img}`)} />
            <div className="card--stats">
                <img className="card--star" src={require("../images/star.png")} />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) •</span>
                <span className="grey"> {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}