import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 
import styled from 'styled-components'
import "./ShopList.css";



class ShopList extends Component {
    state = {
        listOfAllShops: []
    }

    componentDidMount = () => {
        this.getAllShops()
    }

    getAllShops = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/shops`)
    .then((apiResponse) => {
    this.setState({listOfAllShops: apiResponse.data})
    })
    }

    render() {

        const {listOfAllShops} = this.state; 

        return (
            <div  className="container">
            {listOfAllShops.map((shopObj) =>{
            return(
            <div key={shopObj._id} className="ShopCard">
            <Link to={`/shop/${shopObj._id}`}>
            <div className="ShopInfo">
            <div className="ShopContent">
            <img style={{height: "40px"}} src={shopObj.image}/>
            <p>{shopObj.shopName}</p>
            <p>{shopObj.products.length} Products</p>
            </div>
            </div>
            </Link>
            </div>
            )
            })}    
            </div>
        )
    }
}

export default ShopList