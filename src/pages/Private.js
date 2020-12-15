import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import NewIn from './../components/NewIn/NewIn';



import styled from "styled-components";


const Heading5 = styled.h5 `
 margin: 20px 25px
`

class Private extends Component {
  render() {
    return (
      <div>
				<p id="goback" onClick={this.props.history.goBack}> ← Go Back</p>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}
      <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1608064557/private_route_fv5t8k.png" title="Welcome back" subtitle={this.props.user && this.props.user.username} color="black" opacity="0.7" />
      <Heading5>Your favourite categories</Heading5>
      <Category />
      <Heading5>New in</Heading5>
      <NewIn />
      </div>
    );
  }
}


export default withAuth(Private);
