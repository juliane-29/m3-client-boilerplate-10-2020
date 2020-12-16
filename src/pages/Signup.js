import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";
import styled from "styled-components";



const Button = styled.input`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 1px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
  margin: 10px 0px 0px 0px
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
					src="/second_chance_blue.png"
				/>
				<div className="contentLogin">
				<h3 style={{marginLeft: "0px"}}>Let's get started</h3>
				<p>Create a new account</p>
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
						type="text"
						name="email"
						value={email}
						onChange={this.handleChange}
            placeholder="Your email"

					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
            placeholder="Your password"

					/>
					<Button 
          type="submit" 
          value="Sign up" />
				</form>
				<div className="LinkHelp">
				<p>Already have account?</p>
				<Link to={"/login"}><p style={{fontWeight:"bold"}}>Login</p></Link>
				</div>
			</div>
		);
	}
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
