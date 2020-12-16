import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import colors from "../jsonFiles/colors.json";
import conditions from "../jsonFiles/condition.json";
import sizes from "../jsonFiles/sizes.json";
import materials from "../jsonFiles/material.json";
import patterns from "../jsonFiles/pattern.json";
import genders from "../jsonFiles/gender.json";
import categories from "../jsonFiles/categories.json";
import styled from "styled-components";
import axios from "axios";
import SuccessfullUpload from "../SuccessfulUpload/SuccessfullUpload";

const Select = styled.select`
	border: 2.5px solid #ebf0ff;
	font-family: Poppins;
	font-size: 12px;
	font-weight: regular;
	width: 90vw;
	height: 5vh;
	margin: 10px 0px 10px 0px;
	background-color: white;

	option {
		font-size: 12px;
		font-family: Poppins;
		color: #9098b1;
		font-weight: regular;
	}
`;

class EditProduct extends Component {
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
		category: "",
		colors,
		conditions,
		sizes,
		materials,
		patterns,
		genders,
		categories,
		isDisplayed: true,
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	componentDidMount  ()  {
		this.getProductDetails()
	}

	getProductDetails = () => {
		const { id } = this.props.match.params;
		axios
			.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
			.then((response) => {
				const productInfo = response.data;
				console.log("productInfo", productInfo);
				const {
					brand,
					description,
					price,
					listPrice,
					shippingCost,
					condition,
					category,
					size,
					color,
					material,
					pattern,
					image,
					gender,
					shop,
					user,
					_id,
				} = productInfo;
				this.setState({
					brand,
					description,
					price,
					listPrice,
					shippingCost,
					condition,
					category,
					size,
					color,
					material,
					pattern,
					image,
					gender,
					shop,
					user,
					_id,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { id } = this.props.match.params;
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
			category,
		} = this.state;
		axios
			.put(
				`${process.env.REACT_APP_API_URL}/api/products/${id}`,
				{
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
					category,
				},
				{
					withCredentials: true,
				}
			)
			.then(() => {
				console.log("Product was changed");
				this.setState({
					isDisplayed: !this.state.isDisplayed,
				});
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
			gender,
			category,
		} = this.state;
		return (
			<div>
				<p id="goback" onClick={this.props.history.goBack}>
					← Go Back
				</p>
				{this.state.isDisplayed ? (
					<div className="uploadform">
						<h3>Edit a product</h3>
						<form onSubmit={this.handleFormSubmit}>
							<input
								type="text"
								placeholder="Brand"
								name="brand"
								value={brand}
								onChange={this.handleChange}
							/>
							<input
								type="textarea"
								placeholder="Description"
								name="description"
								value={description}
								onChange={this.handleChange}
							/>
							<input
								type="number"
								placeholder="Original Price"
								name="price"
								value={price}
								onChange={this.handleChange}
							/>
							<input
								type="number"
								placeholder="Price to sell the item for"
								name="listPrice"
								value={listPrice}
								onChange={this.handleChange}
							/>
							<input
								type="number"
								placeholder="Shipping"
								name="shippingCost"
								value={shippingCost}
								onChange={this.handleChange}
							/>
							<label>Category</label>
							<Select
								name="category"
								value={category}
								onChange={this.handleChange}
							>
								<option value={category}>{category}</option>
								{categories.map((categoryObj, index) => {
									return (
										<option key={index} value={`${categoryObj.name}`}>
											{categoryObj.name}
										</option>
									);
								})}
							</Select>
							<label>Size</label>
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
							<label>Condition</label>
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
							<label>Color</label>
							<Select name="color" value={color} onChange={this.handleChange}>
								<option value={color}>{color}</option>
								{colors.map((colorObj, index) => {
									return (
										<option value={`${colorObj.color}`}>
											{colorObj.color}
										</option>
									);
								})}
							</Select>
							<label>Material</label>

							<Select
								name="material"
								value={material}
								onChange={this.handleChange}
							>
								<option value={material}>{material}</option>
								{materials.map((materialObj, index) => {
									return (
										<option value={`${materialObj.name}`}>
											{materialObj.name}
										</option>
									);
								})}
							</Select>
							<label>Pattern</label>

							<Select
								name="pattern"
								value={pattern}
								onChange={this.handleChange}
							>
								<option value={pattern}>{pattern}</option>
								{patterns.map((patternObj, index) => {
									return (
										<option key={index} value={`${patternObj.name}`}>
											{patternObj.name}
										</option>
									);
								})}
							</Select>
							<label>Gender</label>

							<Select name="gender" value={gender} onChange={this.handleChange}>
								<option value={gender}>{gender}</option>
								{genders.map((genderObj, index) => {
									return (
										<option value={`${genderObj.name}`}>
											{genderObj.name}
										</option>
									);
								})}
							</Select>
							<input
								className="file"
								type="file"
								name="image"
								placeholder="Image"
								onChange={this.handleFileUpload}
							/>
							<button onClick={this.handleFormSubmit}>Submit</button>
						</form>
					</div>
				) : (
					<SuccessfullUpload type="Product" verb="edited" />
				)}
			</div>
		);
	}
}

export default withAuth(EditProduct);
