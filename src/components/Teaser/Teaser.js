import React from 'react';
import "./Teaser.css";

function Teaser(props) {
    return (
    <div className="teaser" style={{backgroundImage: `url(${props.image})`, opacity: props.opacity}}>
    <div className="teaser-content">
    <h1 style={{color: props.color, fontSize: props.fontSizeh1}}>{props.title}</h1>
    <h2 style={{color: props.color}}>{props.subtitle}</h2>
    <img src={props.logo} />
    </div>
    </div> 
    )
}

export default Teaser