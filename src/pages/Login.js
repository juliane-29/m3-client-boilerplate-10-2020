import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

import styled from "styled-components";

const Input = styled.input`
	border: 0.5px solid #ebf0ff;
	width: 90vw;
	height: 5vh;
	color: #9098b1;
	font-family: Poppins;
	font-size: 12px;
	font-weight: regular;
	border-radius: 5px;
	margin: 10px 0px 10px 0px;
`;

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
					style={{ height: "90px" }}
					alt="logo"
					id="logo"
					src="/second_chance_logo.png"
				/>
				<h4>Welcome to 2nd chance</h4>
				<p>Log in to continue</p>

				<form onSubmit={this.handleFormSubmit}>
					<Input
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
						placeholder="Username"
					/>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						placeholder="Password"
					/>
					<input type="submit" value="Login" />
				</form>
				<p>Don't have an account?</p>
				<Link to={"/signup"}> Signup</Link>
			</div>
		);
	}
}

export default withAuth(Login);
