import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 
import styled from 'styled-components'

const Paragraph = styled.p`
  margin: 0px
`
const ProductCard = styled.div`
 border: 0.3px solid #EBF0FF; 
 margin: 0px 10px 20px 10px
`
const Image = styled.img `
  margin: 15px;
  border-radius: 5px
`
const ProductInfo = styled.div`
  margin: 0px 15px 15px 15px
`


class ListPage extends Component {
    state = {
        listOfProducts: []
    };

    getAllProducts = () =>{
        axios.get(`http://localhost:5000/api/products`)
        .then((apiResponse) => {
          this.setState({ listOfProducts: apiResponse.data })
        })
      }
    
    componentDidMount = () =>{
        this.getAllProducts(); 
    }

    render() {

    const {listOfProducts} = this.state
        return (
            <div className="container">
            {listOfProducts.map((product) => {
            return( 
            <ProductCard key={product._id} className="productCard">
            <Link to={`/products/${product._id}`}>
            <div className="image">
            <Image style={{height:"100px"}}src={product.image}/>
            </div>
            <ProductInfo className="content-productCard">
            <Paragraph>{product.brand}</Paragraph>
            <Paragraph>{product.description}</Paragraph>
            <div>
            <Paragraph>{product.price}€</Paragraph>
            <strike>{product.listPrice}€</strike>
            </div>
            <Paragraph>Condition: {product.condition}</Paragraph>
            </ProductInfo>
            </Link>
            </ProductCard>
            )})}
            </div>
        )
    }
}

export default ListPage; 