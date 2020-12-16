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
        const {product} = this.props
        return (
            <Product className="Product "key={product._id}>
            <Link to={`/products/${product._id}`}>
            <div className="image">
            <Image style={{maxWidth: "35vw", maxHeight: "20vh"}}src={product.image}/>
            </div>
            <ProductInfo className="content-productCard">
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>{product.price}€ <strike>{product.listPrice}€</strike></p>
            <p>Condition: {product.condition}</p>
            </ProductInfo>
            </Link>
            </Product>
        )
    }
}

export default ProductCard