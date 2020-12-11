import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 

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
            <div key={product._id} className="productCard">
            <Link to={`/products/${product._id}`}>
            <img style={{height:"100px"}}src={product.image}/>
            <div>{product.brand}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            </Link>
            </div>
            )})}
            </div>
        )
    }
}

export default ListPage; 