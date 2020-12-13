import React from 'react';
import "./Teaser.css";

function Teaser(props) {
    return (
    <div id="teaser" className="teaser container" style={{backgroundImage: `url(${props.image})`, opacity: "0.9"}}>
    <div className="teaser-content">
    <h1 style={{color: "white"}}>{props.title}</h1>
    <p style={{color: "white"}}>{props.subtitle}</p>
    </div>
    </div> 
    )
}


export default Teaser