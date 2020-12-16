import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 
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

        return (<div className="shopcontent">
            {listOfAllShops.map((shopObj) =>{
            return(
            <Link to={`/shop/${shopObj._id}`}>
            <div key={shopObj._id}>
            <img alt="logo-shop" src={shopObj.image}/>
            <div className="content">
            <p>{shopObj.shopName}</p>
            <p>{shopObj.products.length} Products</p>
            </div>
            </div>
            </Link>
            )
            })}    
            </div>
        )
    }
}

export default ShopList