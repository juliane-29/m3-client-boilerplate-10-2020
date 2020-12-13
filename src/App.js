import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./components/AddProduct/AddProduct";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";
import ShopDetail from "./pages/ShopDetail";

import AddShop from "./pages/AddShop";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";


class App extends Component {

	render() {
		return (
			<div>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home} />
					<AnonRoute exact path="/signup" component={Signup} />
					<AnonRoute exact path="/login" component={Login} />
					<PrivateRoute exact path="/private" component={Private} />
          			<PrivateRoute exact path="/account" component={Account} />
          			<Route exact path="/products/:id" component={ProductDetail} />
					<Route exact path="/shop/:id" component={ShopDetail} />
					<Route exact path="/add-product" component={AddProduct} />
					<Route exact path="/open-shop" component={AddShop} />

				</Switch>
			</div>
		);
	}
}

export default App;
