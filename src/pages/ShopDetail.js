import React, { Component } from "react";
import axios from "axios";
import Teaser from "../components/Teaser/Teaser";
import ProductCard from "../components/ProductCard/ProductCard";
import EditShop from "../components/EditShop/EditShop";


import { withAuth } from "./../context/auth-context";

class ShopDetail extends Component {
	state = {
		shopName: "",
		products: "",
		shopOwner: "",
		image: "",
		description: "",
		email: "",
		lastName: "",
		firstName: "",
		phoneNumber: "",
		instagramAccount: "",
		facebookAccount: "",
		typeOfShop: "",
		address: "",
		zipCode: "",
		city: "",
		country: "",
		worldwideShipping: "",
		listOfProducts: [],
		isDisplayed: false,
	};

	componentDidMount = () => {
		this.getShopDetails();
		this.getAllProducts();
	};

	showForm = () => {
		this.setState({ isDisplayed: !this.state.isDisplayed });
	};

	getShopDetails = () => {
		const { id } = this.props.match.params;
		axios
			.get(`${process.env.REACT_APP_API_URL}/api/shops/${id}`)
			.then((response) => {
				const shopInfo = response.data;
				const {
					shopName,
					firstName,
					lastName,
					description,
					products,
					owner,
					image,
					email
				} = shopInfo;
				this.setState({
					shopName,
					products,
					shopOwner: owner,
					image,
					firstName,
					lastName,
					description,
					email,

					
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getAllProducts = () => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/api/products`)
			.then((apiResponse) => {
				this.setState({ listOfProducts: apiResponse.data });
			});
	};

	render() {
		const {
			shopName,
			products,
			shopOwner,
			image,
			listOfProducts,
			firstName,
			description,
			email,
			lastName
		} = this.state;
		//const { id } = this.props.match.params;
		return (
			<div>
				<p id="goback" onClick={this.props.history.goBack}>
					{" "}
					← Go Back
				</p>
				<Teaser
					image="https://res.cloudinary.com/daj2fsogl/image/upload/v1608064012/teaser_image_shop_vtivd2.png"
					title={shopName}
					subtitle=""
					logo={image}
					color="white"
				/>

				{this.props.match.params.id === this.props.user.shop ? (
					<p style={{ margin: "10px" }}>
						You are viewing your shop, click on your products to edit or delete
						them
					</p>
				) : null}

				{this.props.match.params.id === this.props.user.shop ? (
					<button style={{margin: "0px 0px 10px 20px"}} onClick={this.showForm}>Edit Shop</button>
				) : null}
				{this.state.isDisplayed ? (<EditShop shopName={shopName} firstName={firstName} lastName={lastName} description={description} email={email}></EditShop>) : null}

				<div className="containerShopInfo">
					<img alt="shopLogo" className="shopLogo" src={image} />
					<div>
						<p>{shopName}</p>
						<p>{description}</p>
						<p>
							{firstName} {lastName}
						</p>
						<p>Email: {email}</p>
						
						<p>Products: {products.length}</p>
					</div>
				</div>
				<div className="productList">
					{listOfProducts.map((product) => {
						if (product.shop === shopOwner.shop)
							return <ProductCard product={product} />;
					})}
				</div>
			</div>
		);
	}
}

export default withAuth(ShopDetail);
