import React, { Component } from "react";
import axios from "axios";
import { withAuth } from '../../context/auth-context';
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

class EditShop extends Component {
	state = {
		shopName: "",
		firstName: "",
        lastName: "", 
        user: this.props.user
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const {
			shopName,
			firstName,
			lastName,
			email,
			phoneNumber,
			description,
			instagramAccount,
			facebookAccount,
			typeOfShop,
			address,
			zipCode,
			city,
			country,
			worldwideShipping,
			logo,
		} = this.state;
		const { id } = this.props.match.params; // made available by withRouter()

		axios
			.put(`http://localhost:5000/api/shop/${id}`, {
				shopName,
				firstName,
				lastName,
				email,
				phoneNumber,
				description,
				instagramAccount,
				facebookAccount,
				typeOfShop,
				address,
				zipCode,
				city,
				country,
				worldwideShipping,
				logo,
			})
			.then(() => {
				this.props.getTheProject();
			})
			.catch((err) => console.log(err));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<p>Hallo</p>
			</div>
		);
	}
}

export default withAuth(EditShop);
