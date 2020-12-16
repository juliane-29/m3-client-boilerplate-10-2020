import React from 'react'

function Header(props) {
    return (
        <div style={{backgroundColor: props.backgroundcolor}}>
         <p style={{color: props.color, fontSize: props.fontSize, marginLeft: "20px"}}>{props.caption}</p>
        </div>
    )
}

export default Header