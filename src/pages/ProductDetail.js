import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../context/auth-context";
import EditProduct from "../components/EditProduct/EditProduct";


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
		user: "",
		quantity: 1,
		isDisplayed: false
	};

	componentDidMount = () => {
		this.getProductDetails();
	};

	getProductDetails = () => {
		const { id } = this.props.match.params;
		console.log("id", id);
		axios
			.get(`http://localhost:5000/api/products/${id}`)
			.then((response) => {
				const productInfo = response.data;
				console.log('productInfo', productInfo)
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
					_id
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
					_id
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	showForm = () => {
		this.setState({isDisplayed: !this.state.isDisplayed})
	}

	deleteProduct = () =>{
		const { id } = this.props.match.params;

		axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
		.then( () => this.props.history.push('/account') )
    	.catch( (err) => console.log(err));
	}

	render() {
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
			isDisplayed,
			showForm,
			_id
		} = this.state;
		return (
			<div>
			<p id="goback" onClick={this.props.history.goBack}>Go Back</p>

				<div className="container">
					<div>
						<img
							src={image}
							alt="prouct-image"
							style={{ width: "80vw", height: "40vh" }}
						/>
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
							<p>{_id}</p>

						</div>
						<button>Add to Cart</button>
						{this.props.user.shop === shop ? <button onClick={this.showForm}>Edit Product</button> : null}
						{isDisplayed ? <EditProduct id={_id} /> : null}
						{this.props.user.shop === shop ? <button style={{backgroundColor: "#F7717D", borderRadius: "1px solid #F7717D"}} onClick={this.deleteProduct}>Delete Product</button> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth(ProductDetail);
