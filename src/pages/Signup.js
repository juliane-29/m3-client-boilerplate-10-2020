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
	margin: 10px 0px 10px 10px;
`;

const Button = styled.input`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 1px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
  margin: 10px 0px 0px 10px
`

const Paragraph = styled.p `
  color: #9098B1; 
  font-weight: regular;
  margin: 8px 0px 0px 10px
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
					alt="logo"
					className="logo"
					src="/second_chance_logo.png"
				/>
				<div className="contentLogin">
				<h3 style={{marginLeft: "10px"}}>Let's get started</h3>
				<Paragraph>Create a new account</Paragraph>
				</div>
				<form onSubmit={this.handleFormSubmit}>
					<Input
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
            placeholder="Your username"

					/>
					<Input
						type="text"
						name="email"
						value={email}
						onChange={this.handleChange}
            placeholder="Your email"

					/>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
            placeholder="Your password"

					/>
					<Button 
          type="submit" 
          value="Signup" />
				</form>
				<div className="LinkHelp">
				<Paragraph>Already have account?</Paragraph>
				<Link to={"/login"}><Paragraph>Login</Paragraph></Link>
				</div>
			</div>
		);
	}
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
