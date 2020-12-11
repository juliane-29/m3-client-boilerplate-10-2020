import React, { Component } from 'react';
import { withAuth } from './../context/auth-context';
import AddProduct from '../components/AddProduct/AddProduct';
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
            <button onClick={this.showAccountDetails}>Edit Profile</button>            
            {this.state.isDisplayedAccountDetails ? 
            <p>Profile Edit Component</p>
            : null}
            <div>
            </div>
            <div>
            {this.props.user.shopOwner ? <button onClick={this.showForm}>Show my shop</button> : <button onClick={this.showForm}>Open Shop</button>}
            {this.state.isDisplayed ?
                <AddShop/>
                : null}
            </div>
            <div>
            {this.props.user.shopOwner ? <button onClick={this.showAddProduct} >Upload Product</button> : null}
            {this.state.isDisplayedAddProduct ?
                <AddProduct/>
                : null}
            </div>
            
            </div>
        )
    }
}

export default withAuth(Account);