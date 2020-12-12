import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import styled from "styled-components";

const Input = styled.input`
	border: 2.5px solid #ebf0ff;
	width: 90vw;
	height: 5vh;
	color: #9098b1;
	font-family: Poppins;
	font-size: 12px;
	font-weight: regular;
	border-radius: 5px;
	margin: 10px 0px 10px 0px;
`;

const Button = styled.input`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 1px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
`



class Signup extends Component {
	state = {
		username: "",
		password: "",
		email: "",
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { username, password, email } = this.state;
		// Call function coming from AuthProvider ( via withAuth )
		// Wrapped in
		this.props.signup(username, password, email);
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { username, password, email } = this.state;
		return (
			<div>
				<img
					style={{ height: "90px" }}
					alt="logo"
					id="logo"
					src="/second_chance_logo.png"
				/>
				<h1>Let's get started</h1>
				<p>Create a new account</p>

				<form onSubmit={this.handleFormSubmit}>
					<Input
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
            placeholder="Username"

					/>
					<Input
						type="text"
						name="email"
						value={email}
						onChange={this.handleChange}
            placeholder="Email"

					/>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
            placeholder="Password"

					/>
					<Button 
          type="submit" 
          value="Signup" />
				</form>

				<p>Already have account?</p>
				<Link to={"/login"}> Login</Link>
			</div>
		);
	}
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
