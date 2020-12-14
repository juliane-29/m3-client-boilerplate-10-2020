import React, { Component } from 'react';
import { withAuth } from '../../context/auth-context';
import colors from "../jsonFiles/colors.json";
import conditions from "../jsonFiles/condition.json";
import sizes from "../jsonFiles/sizes.json";
import materials from "../jsonFiles/material.json";
import patterns from "../jsonFiles/pattern.json";
import genders from "../jsonFiles/gender.json";
import categories from "../jsonFiles/categories.json";
import styled from 'styled-components';
import axios from "axios";

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
		categories
    }

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

    handleFormSubmit = (event) => {
		event.preventDefault();
		const  id  = this.props.id;
		console.log('id', id)

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
			category
		} = this.state;
		axios
			.put(`http://localhost:5000/api/products/${id}`, {
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
                category
			})
			.then(() => {
				console.log("Product was changed");
				this.setState({ brand: "", description: ""});
				
			})
			.catch((error) => console.log(error));

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
        gender,
        category,
    } = this.state
        return (
            <div>
               <div className="uploadform">
				<h3>Upload a product</h3>
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
						placeholder="Price"
						name="price"
						value={price}
						onChange={this.handleChange}
					/>
					<input
						type="number"
						placeholder="List Price"
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
						className="file"
						type="file"
						name="image"
						placeholder="Image"
						onChange={this.handleFileUpload}
					/>
					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>
				</div> 
            </div>
        )
    }
}


export default withAuth(EditProduct)