import React, { Component } from "react";
import axios from "axios";
import Teaser from "../components/Teaser/Teaser";

class ShopDetail extends Component {
	state = {
        shopName: "",
        products: "",
        shopOwner: ""
	};

	componentDidMount = () => {
		this.getShopDetails();
	};

	getShopDetails = () => {
		const { id } = this.props.match.params;
		axios
			.get(`http://localhost:5000/api/shops/${id}`)
			.then((response) => {
                console.log('response', response)
				const shopInfo = response.data;
				const { shopName, products, owner } = shopInfo;
                console.log("shopInfo", shopInfo);
                console.log('products', products)
                console.log('owner', owner)
				this.setState({ shopName, products, shopOwner:owner });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
        const {shopName, products, shopOwner } = this.state
		return (
			<div>
				<Teaser
					image="https://res.cloudinary.com/daj2fsogl/image/upload/v1607550394/second-hand/Screenshot_2020-12-09_at_22.46.16_web6iw.png"
					title={shopName}
					subtitle=""
				/>
                <div>{shopOwner.username}</div>
                <div>{shopOwner.email}</div>
                <div>{products.length}</div>
			</div>
		);
	}
}

export default ShopDetail;
