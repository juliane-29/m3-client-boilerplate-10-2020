import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';



class Private extends Component {
  render() {
    return (
      <div>
        <h3>Private Route</h3>
        <h4>Welcome {this.props.user && this.props.user.username}</h4>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}
      <Teaser image="https://static3.depositphotos.com/1000635/120/i/600/depositphotos_1208368-stock-photo-white-paper-seamless-background.jpg"title="Teaser" subtitle="teaser-template" />
      </div>
    );
  }
}


export default withAuth(Private);
