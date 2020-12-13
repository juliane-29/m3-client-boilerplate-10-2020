import React, { Component } from "react";
import axios from "axios";

class ProductDetail extends Component {
	state = {
    brand: "",
	description: "",
	price: "",
	listPrice: "",
	shippingCost: "",
	condition: "",
	category: "",
	size: "",
	color: "",
	material: "",
	pattern: "",
	image: "",
	gender: "",
	shop: "",
	user: ""	
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
				const { brand, description, price, listPrice, shippingCost, condition, category, size, color, material, pattern, image, gender, shop, user } = productInfo;
				this.setState({ brand, description, price, listPrice, shippingCost, condition, category, size, color, material, pattern, image, gender, shop, user });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		const {brand, description, price, listPrice, shippingCost, condition, category, size, color, material, pattern, image, gender, shop, user} = this.state
		return (<div>
		<div className="container">
		<div>
		<img src={image} alt="prouct-image" style={{width: "80vw", height: "40vh"}}/>
		</div>
        <div className="product-info">
		<h3>{brand}</h3>
        <h4>{description}</h4>
		<p>{listPrice}€</p>
		<strike>{price}€</strike>
		<div>
		<p>{shippingCost}€</p>
		<p>{condition}</p>
		<p>{size}</p>
		<p>{color}</p>
		</div>
		<button>Add to Cart</button>
		</div>
        </div>
		</div>)
	}
}

export default ProductDetail;
