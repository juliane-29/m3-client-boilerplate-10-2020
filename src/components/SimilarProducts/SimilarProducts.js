import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

class SimilarProducts extends Component {
	state = {
		listOfProducts: [],
	};

	getAllProducts = () => {
		axios.get(`${process.env.REACT_APP_API_URL}/api/products`).then((apiResponse) => {
			this.setState({ listOfProducts: apiResponse.data });
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
                if(product.brand === this.props.brand)
                return <ProductCard product={product} />
              })}
          </div>

		);
	}
}

export default SimilarProducts;
