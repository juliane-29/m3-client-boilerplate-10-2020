import React, { Component } from 'react'
import { Link } from 'react-router-dom';                // <== IMPORT
import axios from 'axios'; 
import styled from 'styled-components'


const Paragraph = styled.p`
  margin: 0px
`

const ShopInfo = styled.div`
  margin-left: 25px; 
  margin-bottom: 15px;
  border: 0.2px solid #EBF0FF;
  border-radius: 5px;
  width: 80vw;
`

const ShopContent = styled.div`
    margin: 10px
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
            <div>
            {listOfAllShops.map((shopObj) =>{
            return(
            <div key={shopObj._id} className="ShopCard">
            <Link to={`/shop/${shopObj._id}`}>
            <ShopInfo className="ShopInfo">
            <ShopContent className="ShopContent">
            <img style={{height: "40px"}} src={shopObj.logo}/>
            <Paragraph>{shopObj.shopName}</Paragraph>
            <Paragraph>{shopObj.products.length} Products</Paragraph>
            </ShopContent>
            </ShopInfo>
            </Link>
            </div>
            )
            })}    
            </div>
        )
    }
}

export default ShopList