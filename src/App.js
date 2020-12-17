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
import SplashScreen from "./components/SplashScreen/SplashScreen";
import EditProduct from "./components/EditProduct/EditProduct";


class App extends Component {
	state = {
		timePassed: false
	}

	componentDidMount () {
		setTimeout(() => {
			this.setTimePassed();
		}, 2000)
	}

	setTimePassed() {
		this.setState({timePassed: true})
	}

	render() {
		if (!this.state.timePassed) {
			return <SplashScreen/>
		} else {
		return (
			<div>
				<Navbar/>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<AnonRoute exact path="/signup" component={Signup} />
					<AnonRoute exact path="/login" component={Login} />
					<PrivateRoute exact path="/private" component={Private} />
          			<PrivateRoute exact path="/account" component={Account} />
          			<Route exact path="/products/:id" component={ProductDetail} />
					<Route exact path="/shop/:id" component={ShopDetail} />
					<Route exact path="/add-product" component={AddProduct} />
					<Route exact path="/edit-product/:id" component={EditProduct} />
					<PrivateRoute exact path="/open-shop" component={AddShop} />
				</Switch>
			</div>
		);
	}
}
}

export default App;
