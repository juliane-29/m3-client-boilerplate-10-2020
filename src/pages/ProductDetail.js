import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../context/auth-context";
import EditProduct from "../components/EditProduct/EditProduct";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import { Link } from "react-router-dom";

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
		isDisplayed: false,
		id: "",
	};

	componentDidMount = () => {
		this.getProductDetails();
	};

	getProductDetails = () => {
		const { id } = this.props.match.params;
		console.log("id", id);
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

	showForm = () => {
		this.setState({ isDisplayed: !this.state.isDisplayed });
	};

	deleteProduct = () => {
		const { id } = this.props.match.params;

		axios
			.delete(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
			.then(() => this.props.history.push("/account"))
			.catch((err) => console.log(err));
	};

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
			_id,
		} = this.state;
		return (
			<div>
				<p id="goback" onClick={this.props.history.goBack}>
					{" "}
					← Go Back
				</p>

				<div className="pdp">
					<div>
						<img
							src={image}
							alt="product-image"
							style={{ width: "80vw" }}
						/>
					</div>
					<div className="product-info">
						<p>{_id}</p>
						<p>
							Brand : <b>{brand}</b>
						</p>
						<p>
							Desciption: <b>{description}</b>
						</p>
						<p>
							Price:{listPrice}€{" "}
							<strike style={{ fontWeight: "bold" }}>{price}€</strike>
						</p>
						<div>
							<p>Shipping Cost: {shippingCost}€</p>
							<p>Condition: {condition}</p>
							<p>Size: {size}</p>
							<p>Color: {color}</p>
						</div>

						<Link to={`/shop/${shop._id}`}>
						<div className="seller">
							<img src={shop.image} />
							<div>
							<p>Shop: {shop.shopName}</p>
							<p>Email: {shop.email}</p>
							</div>
						</div></Link>

						<button>Add to Cart</button>

						{this.props.user.shop === shop._id ? (
							<Link to={`/edit-product/${_id}`}><button>
								Edit Product</button>
							</Link>
						) : null}
						{this.props.user.shop === shop._id ? (
							<button
								style={{
									backgroundColor: "#F7717D",
									borderRadius: "1px solid #F7717D",
								}}
								onClick={this.deleteProduct}
							>
								Delete Product
							</button>
						) : null}
					</div>
				</div>
				<h5 style={{ marginLeft: "20px", marginTop: "20px" }}>
					You may also like
				</h5>
				<SimilarProducts brand={brand} />
			</div>
		);
	}
}

export default withAuth(ProductDetail);
