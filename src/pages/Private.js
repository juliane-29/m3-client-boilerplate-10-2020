import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import EditShop from '../components/EditShop/EditShop';

import styled from "styled-components";


const Heading5 = styled.h5 `
 margin: 20px 25px
`

class Private extends Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Heading5>Welcome back, {this.props.user && this.props.user.username}</Heading5>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}
      <Teaser image="https://static3.depositphotos.com/1000635/120/i/600/depositphotos_1208368-stock-photo-white-paper-seamless-background.jpg"title="Teaser" subtitle="teaser-template" />
      
      <Teaser />

      </div>
    );
  }
}


export default withAuth(Private);
