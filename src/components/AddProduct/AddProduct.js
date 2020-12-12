import React, { Component } from "react";
import axios from "axios";
import colors from "../jsonFiles/colors.json";
import conditions from "../jsonFiles/condition.json";
import sizes from "../jsonFiles/sizes.json";
import materials from "../jsonFiles/material.json";
import patterns from "../jsonFiles/pattern.json";
import genders from "../jsonFiles/gender.json";
import { withAuth } from '../../context/auth-context';
import styled from 'styled-components'
import SuccessfullUpload from "../SuccessfulUpload/SuccessfullUpload"

import "./AddProduct.css";

const Input = styled.input`
  border: 2.5px solid #EBF0FF;
  width: 90vw;
  height: 5vh;
  color: #9098B1;
  font-family: Poppins;
  font-size: 12px;
  font-weight: regular;
  border-radius: 5px;
  margin: 10px 0px 10px 0px; 
`

const Textarea = styled.textarea`
	border: 2.5px solid #EBF0FF;
	width: 90vw;
	color: #9098B1;
	font-weight: regular;
	font-size: 12px;
	font-family: Poppins;
	margin: 10px 0px 10px 0px; 
`

const Select = styled.select`
	border: 2.5px solid #EBF0FF;
   	font-family: Poppins;
  	font-size: 12px;
	font-weight: regular;
	width: 90vw;
	height: 5vh;
	margin: 10px 0px 10px 0px; 
  
	option {
		font-size: 12px;
		font-family: Poppins;
		color: #9098B1;
		font-weight: regular;
	}
`

const Button = styled.button`
  background-color: #D2D2CF;
  width: 90vw;
  height: 6vh;
  border: 1px solid #D2D2CF; 
  font-size: 14px; 
  color: white; 
  font-family: Poppins; 
`

const Heading5 = styled.h5 `
 margin: 20px 25px
`

class AddProduct extends Component {
	state = {
		brand: "",
		description: "",
		price: "",
		listPrice: "",
		shippingCost: "",
		condition: "",
		size: "",
		color: "",
		material: "",
		pattern: "",
		image: "",
		gender: "",
		colors,
		conditions,
		sizes,
		materials,
		patterns,
		genders,
		isDisplayed: true
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		//console.log("event target", event.target);
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const userId= this.props.user._id
		console.log('userId', userId)
		const shopId= this.props.user.shop
		console.log('shopId', shopId)
		const {
			brand,
			description,
			price,
			listPrice,
			shippingCost,
			condition,
			size,
			color,
			material,
			pattern,
			image,
			gender,
			isDisplayed
		} = this.state;
		axios
			.post("http://localhost:5000/api/products", {
				brand,
				description,
				price,
				listPrice,
				shippingCost,
				condition,
				size,
				color,
				material,
				pattern,
				image,
				gender,
				userId,
				shopId
			})
			.then((createdProduct) => {
				console.log("createdProduct", createdProduct);
				this.setState({ brand: "", description: "", isDisplayed: !isDisplayed});
				
			})
			.catch((error) => console.log(error));

	};

	handleFileUpload = (e) => {
		console.log("The file to be uploaded is: ", e.target.files);
		const file = e.target.files[0];
	
		const uploadData = new FormData();
		// image => this name has to be the same as in the model since we pass
		// req.body to .create() method when creating a new project in '/api/projects' POST route
		uploadData.append("image", file);
	
		axios
		  .post("http://localhost:5000/api/upload", uploadData, {
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
			brand,
			description,
			price,
			listPrice,
			shippingCost,
			condition,
			size,
			color,
			material,
			pattern,
			image,
			gender
		} = this.state;
		return (
			<div>{this.state.isDisplayed ? 
				(<div>
				<h4>Upload a product</h4>
				<form onSubmit={this.handleFormSubmit}>
					<Input
						type="text"
						placeholder="Brand"
						name="brand"
						value={brand}
						onChange={this.handleChange}
					/>
					<Textarea
						placeholder="Description"
						name="description"
						value={description}
						onChange={this.handleChange}
					/>
					<Input
						type="number"
						placeholder="Price"
						name="price"
						value={price}
						onChange={this.handleChange}
					/>
					<Input
						type="number"
						placeholder="List Price"
						name="listPrice"
						value={listPrice}
						onChange={this.handleChange}
					/>
					<Input
						type="number"
						placeholder="Shipping"
						name="shippingCost"
						value={shippingCost}
						onChange={this.handleChange}
					/>
					<Select name="size" value={size} onChange={this.handleChange}>
						<option value={size}>{size}</option>
						{sizes.map((sizeObj, index) => {
							return (
								<option key={index} value={`${sizeObj.name}`}>
									{sizeObj.name}
								</option>
							);
						})}
					</Select>

					<Select
						name="condition"
						value={condition}
						onChange={this.handleChange}
					>
						<option value={condition}>{condition}</option>
						{conditions.map((conditionObj, index) => {
							return (
								<option key={index} value={`${conditionObj.name}`}>
									{conditionObj.name}
								</option>
							);
						})}
					</Select>
					<Select name="color" value={color} onChange={this.handleChange}>
						<option value={color}>{color}</option>
						{colors.map((colorObj, index) => {
							return (
								<option value={`${colorObj.color}`}>{colorObj.color}</option>
							);
						})}
					</Select>

					<Select name="material" value={material} onChange={this.handleChange}>
						<option value={material}>{material}</option>
						{materials.map((materialObj, index) => {
							return (
								<option value={`${materialObj.name}`}>
									{materialObj.name}
								</option>
							);
						})}
					</Select>

					<Select name="pattern" value={pattern} onChange={this.handleChange}>
						<option value={pattern}>{pattern}</option>
						{patterns.map((patternObj, index) => {
							return (
								<option key={index} value={`${patternObj.name}`}>
									{patternObj.name}
								</option>
							);
						})}
					</Select>

					<Select name="gender" value={gender} onChange={this.handleChange}>
						<option value={gender}>{gender}</option>
						{genders.map((genderObj, index) => {
							return (
								<option value={`${genderObj.name}`}>{genderObj.name}</option>
							);
						})}
					</Select>
					<input
						type="file"
						name="image"
						placeholder="Image"
						onChange={this.handleFileUpload}
					/>
					<Button onClick={this.handleFormSubmit}>Submit</Button>
				</form>
				</div>) : (<SuccessfullUpload type="Product" verb="uploaded"/>)}
			</div>
		);
	}
}

export default withAuth(AddProduct);
