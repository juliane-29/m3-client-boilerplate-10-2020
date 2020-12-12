import React, { Component } from 'react'
import "./SuccessfullUpload.css";


function SuccessfullUpload (props)  {
        return (
            <div>
            <p>{props.type} has been {props.verb} successfully!</p>
            <img alt="checkmark" style={{height: "60px"}} src="/verified.png" />
            </div>
        )
}

export default SuccessfullUpload