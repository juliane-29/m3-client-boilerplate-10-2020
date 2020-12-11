import React, { Component } from "react";
import axios from "axios";

class ProductDetail extends Component {
	state = {
    brand: "",
    description: ""
    };

	componentDidMount = () => {
		this.getProductDetails();
	};

	getProductDetails = () => {
		const { id } = this.props.match.params;
		console.log('id', id)
		axios
			.get(`http://localhost:5000/api/products/${id}`)
			.then((response) => {
				const productInfo = response.data;
				const { brand, description } = productInfo;
				this.setState({ brand, description });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (<div>
        <h2>Product Details</h2>
        <p>{this.state.brand}</p>
        <p>{this.state.description}</p>
        </div>)
	}
}

export default ProductDetail;
