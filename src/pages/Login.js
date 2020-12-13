import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

import styled from "styled-components";

const Button = styled.input`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 2.5px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
  margin: 10px 0px 0px 0px;
`

class Login extends Component {
	state = { username: "", password: "" };

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { username, password } = this.state;
		// Call function coming from AuthProvider ( via withAuth )
		this.props.login(username, password);
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { username, password } = this.state;

		return (
			<div>
				<img
					style={{ height: "100px" }}
					alt="logo"
					className="logo"
					src="/second_chance_logo.png"
				/>
				<div className="contentLogin">
				<h3>Welcome to 2nd chance</h3>
				<p>Log in to continue</p>
				</div>
				<form onSubmit={this.handleFormSubmit}>
					<input
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
						placeholder="Your username"
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						placeholder="Your password"
					/>
					<Button type="submit" value="Login" />
				</form>
				<div className="LinkHelp">
				<p>Don't have an account?</p>
				<Link to={"/signup"}><p style={{fontWeight:"bold"}}>Signup</p></Link>
				</div>
			</div>
		);
	}
}

export default withAuth(Login);
