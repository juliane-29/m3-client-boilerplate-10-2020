import React, { Component } from 'react'
import "./SuccessfullUpload.css";


class SuccessfullUpload extends Component {
    render() {
        return (
            <div>
            <p>Product upload was successfull!</p>
            <img alt="checkmark" style={{height: "60px"}} src="/verified.png" />
            </div>
        )
    }
}

export default SuccessfullUpload