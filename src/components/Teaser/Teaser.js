import React from 'react';
import "./Teaser.css";



function Teaser(props) {
    return (
    <div id="teaser" className="teaser container" style={{backgroundImage: `url(${props.image})`, opacity: "{props.opactiy}"}}>
    <div className="teaser-content">
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
    </div>
    </div> 
    )
}


export default Teaser