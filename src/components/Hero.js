import React from "react";

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero--collage" src={require("../images/collage.png")} />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}