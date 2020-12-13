import React, { Component } from "react";
import axios from "axios";
import Teaser from "../components/Teaser/Teaser";
import ProductCard from '../components/ProductCard/ProductCard';


class ShopDetail extends Component {
	state = {
        shopName: "",
        products: "",
		shopOwner: "",
		logo: "",
		listOfProducts: []
	};

	componentDidMount = () => {
		this.getShopDetails();
		this.getAllProducts();
	};

	getShopDetails = () => {
		const { id } = this.props.match.params;
		axios
			.get(`http://localhost:5000/api/shops/${id}`)
			.then((response) => {
                console.log('response', response)
				const shopInfo = response.data;
				const { shopName, products, owner, logo } = shopInfo;
                console.log("shopInfo", shopInfo);
                console.log('products', products)
                console.log('owner', owner)
				this.setState({ shopName, products, shopOwner:owner, logo });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getAllProducts = () => {
		axios.get(`http://localhost:5000/api/products`).then((apiResponse) => {
			this.setState({ listOfProducts: apiResponse.data });
		});
	};

	render() {
        const {shopName, products, shopOwner, logo, listOfProducts } = this.state
		return (
			<div>
				<p>Go Back</p>
				<Teaser
					image="https://res.cloudinary.com/daj2fsogl/image/upload/v1607550394/second-hand/Screenshot_2020-12-09_at_22.46.16_web6iw.png"
					title={shopName}
					subtitle=""
				/>
				<div className="container">
				<div class="imageContainer">
				<img style={{height: "40px"}} src={logo} />
				</div>
                <p>{shopOwner.username}</p>
                <p>Email: {shopOwner.email}</p>
                <p>Products: {products.length}</p>
				</div>
				<div className="container">
              {listOfProducts.map((product, index) => {
				if(product.shop === shopOwner.shop)
                return <ProductCard product={product} />
              })}
          </div>
			</div>
		);
	}
}

export default ShopDetail;
