import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 
import styled from 'styled-components'
import "./ShopList.css";

const Paragraph = styled.p`
  margin: 0px
`

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
            <div  className="container">
            {listOfAllShops.map((shopObj) =>{
            return(
            <div key={shopObj._id} className="ShopCard">
            <Link to={`/shop/${shopObj._id}`}>
            <div className="ShopInfo">
            <div className="ShopContent">
            <img style={{height: "40px"}} src={shopObj.logo}/>
            <Paragraph>{shopObj.shopName}</Paragraph>
            <Paragraph>{shopObj.products.length} Products</Paragraph>
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