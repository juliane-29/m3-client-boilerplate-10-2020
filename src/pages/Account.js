import React, { Component } from "react";
import { withAuth } from "./../context/auth-context";
import { Link } from 'react-router-dom';
import axios from "axios";


import AddProduct from "../components/AddProduct/AddProduct";
import EditShop from "../components/EditShop/EditShop";
import AddShop from "./AddShop";
import ShopDetail from "./ShopDetail";

import styled from "styled-components";

const Image = styled.p`
	height: 40px;
	border-radius: 50%;
`
const Line = styled.hr`
	width: 90vw;
	color: #ebf0ff;
	margin-left: 20px
`;

class Account extends Component {
	state = {
		isDisplayed: false,
		isDisplayedAddProduct: false,
		isDisplayedAccountDetails: false,
	};

	showForm = () => {
		this.setState({
			isDisplayed: !this.state.isDisplayed,
		});
	};

	showFormProduct = () => {
		this.setState({
			isDisplayedAddProduct: !this.state.isDisplayedAddProduct,
		});
	};


	showAccountDetails = () => {
		this.setState({
			isDisplayedAccountDetails: !this.state.isDisplayedAccountDetails,
		});
    };
    
    deleteShop = () => {
        const id  = this.props.user.shop
        console.log('id', id)

        axios.delete(`http://localhost:5000/api/shops/${id}`)
        .then((foundShop) => {
            this.props.history.push('/')
            console.log('Successfully deleted', foundShop)
        })
        .catch((err) => {
            console.log('err', err)
        })

    }

	render() {
		return (
			<div>
                <div>
					{this.props.user && this.props.user.image ? (
						<Image src={this.props.user.image} />
					) : null}
					
				</div>
				<p>{this.props.user && this.props.user.username}</p>
				<Line></Line>
				<p onClick={this.showAccountDetails}>Edit Profile</p>
				{this.state.isDisplayedAccountDetails ? <p>Product</p> : null}
				<Line></Line>

				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.showForm}>Edit my shop</p>
					) : (
						<p onClick={this.showForm}>Open Shop</p>
					)}
					{this.state.isDisplayed ? <AddShop /> : null}
				</div>
				<Line></Line>

                <div>
					{this.props.user.shopOwner ? (
						<Link to={`/shop/${this.props.user.shop}`}><p>View your shop</p><Line></Line></Link>
					) : (null
					)}
				</div>
                
				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.showFormProduct}>Upload Product</p> 

					) : null}
					{this.state.isDisplayedAddProduct ? <AddProduct /> : null}
				</div>

                <Line></Line>
                
				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.deleteShop} style={{color: "#F7717D"}}>Delete your shop</p>
					) : null}
					{this.state.isDisplayedAddProduct ? <AddProduct /> : null}
				</div>


				<button onClick={this.props.logout}>Logout</button>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                

			</div>
		);
	}
}

export default withAuth(Account);
