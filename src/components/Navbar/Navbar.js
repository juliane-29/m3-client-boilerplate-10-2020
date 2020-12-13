import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/auth-context";
import "./Navbar.css";
import styled from "styled-components";

const NavLinkText = styled.div`
	color: #9098b1;
	font-family: Poppins;
	font-size: 10px;
	font-weight: regular;
	border-radius: 5px;
	margin: 0px 0px 0px 0px;
`;

class Navbar extends Component {
	render() {
		// const { user, logout, isLoggedin } = this.props;
		return (
			<nav className="navbar fixed-bottom navbar-light bg-light container">
				<Link to={"/"} className="home-btn">
					<div>
						<img
							className="icon-nav"
							alt="homepage-icon"
							src="/home_icon.png"
						/>
					</div>
					<NavLinkText>Home</NavLinkText>
				</Link>
				<Link to={"/account"} className="home-btn">
					<div>
						<img 
              className="icon-nav" 
              alt="user-icon" 
              src="/user_icon.png" 
              />
					</div>
					<NavLinkText>Account</NavLinkText>
				</Link>
				<Link to={"/private"} className="home-btn">
					<div>
						<img 
              className="icon-nav" 
              alt="user-icon" 
              src="/search_icon.png" 
              />
					</div>
					<NavLinkText>Explore</NavLinkText>
				</Link>
				{this.props.user && this.props.user.shopOwner ? (
					<Link to={"/add-product"} className="home-btn">
						<img 
              className="icon-nav" 
              alt="user-icon" 
              src="/upload.png" 
              />
						<NavLinkText>Add Product</NavLinkText>
					</Link>
				) : (
					<Link to={"/open-shop"} className="home-btn">
						<img 
              className="icon-nav" 
              alt="user-icon" 
              src="/cart_icon.png" 
              />
						<NavLinkText>Open Shop</NavLinkText>
					</Link>
				)}
			</nav>
		);
	}
}

// makes it into a consumer
export default withAuth(Navbar);
