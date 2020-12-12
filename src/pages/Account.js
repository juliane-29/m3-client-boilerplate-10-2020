import React, { Component } from 'react';
import { withAuth } from './../context/auth-context';
import AddProduct from '../components/AddProduct/AddProduct';
import EditShop from '../components/EditShop/EditShop';

import AddShop from './AddShop';

import ShopDetail from './ShopDetail';


class Account extends Component {
    state = {
    
        isDisplayed: false,  
        isDisplayedAddProduct: false,
        isDisplayedAccountDetails: false,
    }

    showForm = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    showAddProduct = () =>{
        this.setState({
            isDisplayedAddProduct: !this.state.isDisplayedAccountDetails
        })
    }

    showAccountDetails = () =>{
        this.setState({
            isDisplayedAccountDetails: !this.state.isDisplayedAddProduct
        })
    }

    render() {
        return (
            <div>
            <p onClick={this.showAccountDetails}>Edit Profile</p>            
            {this.state.isDisplayedAccountDetails ? 
            <p>Product</p>
            : null}
            <div>
            </div>
            <div>
            {this.props.user.shopOwner ? <p onClick={this.showForm}>Show my shop</p> : <p onClick={this.showForm}>Open Shop</p>}
            {this.state.isDisplayed ?
                <AddShop/>
                : null}
            </div>
            <div>
            {this.props.user.shopOwner ? <p onClick={this.showAddProduct} >Upload Product</p> : null}
            {this.state.isDisplayedAddProduct ?
                <AddProduct/>
                : null}
            </div>
            
            </div>
        )
    }
}

export default withAuth(Account);