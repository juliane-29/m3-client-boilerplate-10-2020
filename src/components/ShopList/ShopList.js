import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 

class ShopList extends Component {
    state = {
        listOfAllShops: []
    }

    componentDidMount = () => {
        this.getAllShops()
    }

    getAllShops = () => {
    axios.get(`http://localhost:5000/api/shops`)
    .then((apiResponse) => {
    this.setState({listOfAllShops: apiResponse.data})
    })
    }

    render() {

        const {listOfAllShops} = this.state; 

        return (
            <div>
            {listOfAllShops.map((shopObj) =>{
            return(
            <div key={shopObj._id} className="ShopCard">
            <Link to={`/shop/${shopObj._id}`}>
            <div>{shopObj.shopName}</div>
            <div>{shopObj.logo}</div>
            </Link>
            </div>
            )
            })}    
            </div>
        )
    }
}

export default ShopList