import React, { Component } from 'react'
import axios from 'axios'; 
import Searchbar from "../Searchbar/Searchbar"
import SearchResult from "../SearchResult/SearchResult"




class SearchResults extends Component {
    state = {
        // array with all the products
        products: [],
        // array with the products filtered after brand
        productsFiltered: []
    }

    getAllProducts = () =>{
        axios.get(`http://localhost:5000/api/products`)
        .then((apiResponse) => {
          this.setState({ products: apiResponse.data })
        })
      }
    
    componentDidMount = () =>{
        this.getAllProducts(); 
    }

    filterProducts = (input) => {
            const filteredProducts = this.state.products.filter((product) =>{
            const productBrand = product.brand.toLowerCase();
            //console.log('productBrand', productBrand)
            const searchInput = input.toLowerCase();
            return productBrand.includes(searchInput)
        })

        this.setState({productsFiltered: filteredProducts})
    }

    render() {
        return (
            <div>
            <Searchbar filterProducts={this.filterProducts}/>
            <p>{this.state.productsFiltered.map((productObj, index) =>{
                return (<SearchResult key={index} productObj={productObj}/>)
            })}</p>                       
            </div>
        )
    }
}

export default SearchResults