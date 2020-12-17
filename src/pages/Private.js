import React, { Component } from "react";
import { withAuth } from './../context/auth-context';
import Teaser from './../components/Teaser/Teaser';
import Category from './../components/Category/Category';
import ListPage from "../components/ListPage/ListPage";

class Private extends Component {

  render() {
    return (
      <div>
			<p id="goback" onClick={this.props.history.goBack}> ← Go Back</p>
      <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1608064557/private_route_fv5t8k.png" title="Welcome back" subtitle={this.props.user && this.props.user.username} color="black" opacity="0.7" />
      <h5>Your favourite categories</h5>
      <Category />
      <h5>All Products</h5>
      <ListPage />
      </div>
    );
  }
}


export default withAuth(Private);
