import React, { Component } from 'react';
import { Link } from 'react-router-dom';               


class ProductCard extends Component {
    render() {
        return (
            <div key={this.props.product._id}>
            <Link to={`/products/${this.props.product._id}`}>
            <div className="image">
            <img style={{width:"35vw", height:"20vh"}} src={this.props.product.image}/>
            </div>
            <div className="content-productCard">
            <p>{this.props.product.brand}</p>
            <p>{this.props.product.description}</p>
            <p>{this.props.product.price}€ <strike>{this.props.product.listPrice}€</strike></p>
            <p>Condition: {this.props.product.condition}</p>
            </div>
            </Link>
            </div>
        )
    }
}

export default ProductCard