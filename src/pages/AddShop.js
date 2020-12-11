import React, { Component } from 'react'
import axios from "axios";
import { withAuth } from './../context/auth-context';


class AddShop extends Component {
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
	backgroundImage: "",
	worldwideShipping: "",
    logo: "",
	user: this.props.user
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		//console.log("event target", event.target);
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const userId= this.props.user._id
		//console.log('userId', userId)
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
			backgroundImage,
			worldwideShipping,
			logo
		} = this.state;
		axios
		.post("http://localhost:5000/api/shops", 
			{shopName,
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
			backgroundImage,
			logo,
			userId},{withCredentials: true})
		.then((createdShop) =>{
			console.log(createdShop)
			this.setState({ firstName: "", description: ""}, () => {
				this.props.me()
			});	
		})
		.catch((error) => console.log(error));
	}

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
			country,
			backgroundImage,
			logo,
		} = this.state;
		return (
			<div>
			<h1>Open a shop</h1>
			<form onSubmit={this.handleFormSubmit}>
				<input
				type="text"
				placeholder="Name of the shop"
				name="shopName"
				value={shopName}
				onChange={this.handleChange}
				/>			
				<input
				type="text"
				placeholder="First Name"
				name="firstName"
				value={firstName}
				onChange={this.handleChange}
				/>
				<input
				type="text"
				placeholder="Last Name"
				name="lastName"
				value={lastName}
				onChange={this.handleChange}
				/>	
				<input
				type="text"
				placeholder="Email"
				name="email"
				value={email}
				onChange={this.handleChange}
					/>	


				<input
				type="text"
				placeholder="Phone Number"
				name="phoneNumber"
				value={phoneNumber}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Description"
				name="description"
				value={description}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Instagram"
				name="instagramAccount"
				value={instagramAccount}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Facebook"
				name="facebookAccount"
				value={facebookAccount}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Type of Shop"
				name="typeOfShop"
				value={typeOfShop}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Address"
				name="address"
				value={address}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="Zip"
				name="zipCode"
				value={zipCode}
				onChange={this.handleChange}
				/>	

				<input
				type="text"
				placeholder="City"
				name="city"
				value={city}
				onChange={this.handleChange}
				/>
				
				<input
				type="text"
				placeholder="Country"
				name="country"
				value={country}
				onChange={this.handleChange}
				/>	

				<input
				type="file"
				placeholder="Backgroundimage"
				name="backgroundImage"
				value={backgroundImage}
				onChange={this.handleChange}
				/>	

				<input
				type="file"
				placeholder="Logo"
				name="logo"
				value={logo}
				onChange={this.handleChange}
				/>	

		<button onClick={this.handleFormSubmit}>Submit</button>
			</form>
			</div>
		)
	}
}

export default withAuth(AddShop); 
