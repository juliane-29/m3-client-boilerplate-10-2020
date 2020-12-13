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
	margin: 10px 0px 10px 10px;
`;

class EditShop extends Component {
	state = {
		shopName: "",
		firstName: "",
        lastName: "", 
        email: "", 
	    phoneNumber: "",
		description: "",
		instagramAccount: "",
		facebookAccount: "",
		typeOfShop: "",
		address: "",
		zipCode: "",
		city: "",
		country: "",
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
			country
		} = this.state;
        const  id  = this.props.user.shop; // made available by withRouter()
        

		axios
			.put(`http://localhost:5000/api/shops/${id}`, {
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
			    country
			})
			.then(() => {
                console.log('Shop was edited')
			})
			.catch((err) => console.log(err));
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
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
			country
        } = this.state
		return (
			<div>
				<h3>Edit Shop</h3>
                <form onSubmit={this.handleFormSubmit}>
                <Input
				type="text"
				placeholder="Name of the shop"
				name="shopName"
				value={shopName}
				onChange={this.handleChange}
				/>

				<Input
				type="text"
				placeholder="First Name"
				name="firstName"
				value={firstName}
				onChange={this.handleChange}
				/>

				<Input
				type="text"
				placeholder="Last Name"
				name="lastName"
				value={lastName}
				onChange={this.handleChange}
				/>	

                <Input
				type="text"
				placeholder="Email"
				name="email"
				value={email}
				onChange={this.handleChange}
				/>	


				<Input
				type="text"
				placeholder="Phone Number"
				name="phoneNumber"
				value={phoneNumber}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Description"
				name="description"
				value={description}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Instagram"
				name="instagramAccount"
				value={instagramAccount}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Facebook"
				name="facebookAccount"
				value={facebookAccount}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Type of Shop"
				name="typeOfShop"
				value={typeOfShop}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Address"
				name="address"
				value={address}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="Zip"
				name="zipCode"
				value={zipCode}
				onChange={this.handleChange}
				/>	

				<Input
				type="text"
				placeholder="City"
				name="city"
				value={city}
				onChange={this.handleChange}
				/>

                <input type="submit" value="Edit Shop" />

                </form>
			</div>
		);
	}
}

export default withAuth(EditShop);
