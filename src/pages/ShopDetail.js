import React, { Component } from 'react';
import axios from "axios"
import Teaser from '../components/Teaser/Teaser';



class ShopDetail extends Component {
    state = {
        shopName: "",
    }; 

    componentDidMount = () => {
		this.getShopDetails();
    };
    
    getShopDetails = () => {
        const { id } = this.props.match.params;
        axios
        .get(`http://localhost:5000/api/shops/${id}`)
        .then((response) => {
            const shopInfo = response.data;
            const { shopName } = shopInfo;
            this.setState({ shopName });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div>
            <Teaser image="https://res.cloudinary.com/daj2fsogl/image/upload/v1607550394/second-hand/Screenshot_2020-12-09_at_22.46.16_web6iw.png" title={this.state.shopName} subtitle=""/>
            
            </div>
        )
    }
}

export default ShopDetail