import React, { Component } from 'react'
import axios from "axios";
import { withAuth } from './../context/auth-context';
import styled from 'styled-components';
import SuccessfullUpload from "../components/SuccessfulUpload/SuccessfullUpload"

const Button = styled.button`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 1px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
  margin: 10px 0px 0px 0px
`


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
	worldwideShipping: "",
	image: "",
	user: this.props.user,
	isDisplayed: true
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		//console.log("event target", event.target);
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const userId= this.props.user._id
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
			image, 
			isDisplayed
		} = this.state;
		axios
		.post(`${process.env.REACT_APP_API_URL}/api/shops`, 
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
			image,
			userId,
		isDisplayed
	},{withCredentials: true})
		.then((createdShop) =>{
			this.setState({ firstName: "", description: "", image: "", isDisplayed: !isDisplayed}, () => {
				this.props.me()
			});	
		})
		.catch((error) => console.log(error));
	}

	handleFileUpload = (e) => {
		//console.log("The file to be uploaded is: ", e.target.files);
		const file = e.target.files[0];
		const uploadData = new FormData();
		// image => this name has to be the same as in the model since we pass
		// req.body to .create() method when creating a new project in '/api/projects' POST route
		uploadData.append("image", file);
		axios
		  .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
			withCredentials: true,
		  })
		  .then((response) => {
			console.log("response is: ", response);
			// after the console.log we can see that response carries 'secure_url' which we can use to update the state
			this.setState({ image: response.data.secure_url });
		  })
		  .catch((err) => {
			console.log("Error while uploading the file: ", err);
		  });
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
		} = this.state;
		return (<div>{this.state.isDisplayed ? 
			(<div className="uploadform">
			<h3>Open a shop</h3>
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
				className="file"
				type="file"
				placeholder="Logo"
				name="image"
				onChange={this.handleFileUpload}
				/>	

		<Button onClick={this.handleFormSubmit}>Submit</Button>
			</form>
			</div>) : (<SuccessfullUpload type="Shop" verb="uploaded"/>)}
			</div> 
		)
	}
}

export default withAuth(AddShop); 
