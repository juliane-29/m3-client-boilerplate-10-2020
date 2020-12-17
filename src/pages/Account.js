import React, { Component } from "react";
import { withAuth } from "./../context/auth-context";
import { Link } from "react-router-dom";
import axios from "axios";
import AddProduct from "../components/AddProduct/AddProduct";
import EditShop from "../components/EditShop/EditShop";

class Account extends Component {
	state = {
		isDisplayed: false,
		isDisplayedAddProduct: false,
		isDisplayedAccountDetails: false,
		user: this.props.user,
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
		const id = this.props.user.shop;
		//console.log("id", id);

		axios
			.delete(`${process.env.REACT_APP_API_URL}/api/shops/${id}`, {
				withCredentials: true,
			})
			.then((foundShop) => {
				this.props.me();
				//.then(() => {
				//	this.props.history.push("/");
				//})
				//console.log("Successfully deleted", foundShop);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};


	render() {
		return (
			<div className="AccountInfo">
				<p id="goback" onClick={this.props.history.goBack}>
					{" "}
					← Go Back
				</p>
				
				<p>{this.props.user && this.props.user.username}</p>
				<hr></hr>
				<p onClick={this.showAccountDetails}>Profile Info</p>
				{this.state.isDisplayedAccountDetails ? (<p>{this.props.user ? <h5>{this.props.user.username}<br/>{this.props.user.email}</h5> : null}</p>) : null}
				<hr></hr>

				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.showForm}>
							Edit my shop<hr style={{marginLeft:"0px"}}></hr>
						</p>
						
					) : null}
					{this.state.isDisplayed ? <EditShop /> : null}
				</div>

				<div>
					{this.props.user.shopOwner ? (
						<Link to={`/shop/${this.props.user.shop}`}>
							<p>View your shop</p>
							<hr></hr>
						</Link>
					) : null}
				</div>

				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.showFormProduct}>
							Upload Product<hr ></hr>
						</p>
					) : null}
					{this.state.isDisplayedAddProduct ? <AddProduct /> : null}
				</div>

				<div>
					{this.props.user.shopOwner ? (
						<p onClick={this.deleteShop} style={{ color: "#F7717D" }}>
							Delete your shop
						</p>
					) : null}
				</div>

				<button style={{ marginLeft: "20px" }} onClick={this.props.logout}>
					Logout
				</button>
			</div>
		);
	}
}

export default withAuth(Account);
