import React, { Component } from 'react'
import "./SuccessfullUpload.css";


function SuccessfullUpload (props)  {
        return (
            <div className="successfulUpload">
            <img alt="checkmark" style={{height: "60px"}} src="/verified.png" />
            <p style={{marginLeft: "10px"}}>{props.type} has been {props.verb} successfully!</p>
            </div>
        )
}

export default SuccessfullUpload