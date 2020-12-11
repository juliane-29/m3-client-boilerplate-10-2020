import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';
import "./Navbar.css";


class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
    <nav className="navbar fixed-bottom navbar-light bg-dark">
        <Link to={'/'} id='home-btn'>
          <img className="icon-nav" alt="homepage-icon" src="/home_icon.png"/><p>Home</p>
        </Link>
        <Link to={'/account'} id='home-btn'>
          <img className="icon-nav" alt="user-icon" src="/user_icon.png"/><p>Account</p>
        </Link>
        <Link to={'/private'} id='home-btn'>
          <img className="icon-nav" alt="user-icon" src="/user_icon.png"/><p>Explore</p>
        </Link>
        {this.props.user && this.props.user.shopOwner ? 
        (<Link to={'/add-product'} id="home-btn"><img className="icon-nav" alt="user-icon" src="/user_icon.png"/><p>Add Product</p></Link>) 
        : (<Link to={'/open-shop'} id="home-btn"><img className="icon-nav" alt="user-icon" src="/user_icon.png"/><p>Open Shop</p></Link>)}
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
          </>
        ) : (
          <>{/**/}
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
            <Link to="/private">
              <button className="navbar-button">Private</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

// makes it into a consumer
export default withAuth(Navbar);
