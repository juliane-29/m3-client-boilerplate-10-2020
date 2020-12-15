import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import styled from 'styled-components'


const Product = styled.div`
 border: 0.3px solid #EBF0FF; 
 margin: 0px 10px 20px 10px
`
const Image = styled.img `
  margin: 8px;
  border-radius: 5px
`
const ProductInfo = styled.div`
  margin: 0px 10px 10px 15px
`
class ProductCard extends Component {
    render() {
        return (
            <Product className="Product "key={this.props.product._id}>
            <Link to={`/products/${this.props.product._id}`}>
            <div className="image">
            <Image style={{height: "20vh"}}src={this.props.product.image}/>
            </div>
            <ProductInfo className="content-productCard">
            <p>{this.props.product.brand}</p>
            <p>{this.props.product.description}</p>
            <p>{this.props.product.price}€ <strike>{this.props.product.listPrice}€</strike></p>
            <p>Condition: {this.props.product.condition}</p>
            </ProductInfo>
            </Link>
            </Product>
        )
    }
}

export default ProductCard