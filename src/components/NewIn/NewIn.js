import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

class NewIn extends Component {
	state = {
		listOfProducts: [],
	};

	getAllProducts = () => {
		axios.get(`${process.env.REACT_APP_API_URL}/api/products`).then((apiResponse) => {
			let latestProducts = apiResponse.data.slice(-4)
			this.setState({ listOfProducts: latestProducts });
		});
	};

	componentDidMount = () => {
		this.getAllProducts();
	};

	render() {
		const { listOfProducts } = this.state;

		return (
            <div className="container">
			
              {listOfProducts.map((product, index) => {
                if(index <= 3)
                return <ProductCard product={product} />
              })}
          </div>

		);
	}
}

export default NewIn;
