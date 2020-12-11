import React, { Component } from "react";
import "./SplashScreen.css";

class SplashScreen extends Component {
	render() {
		return (
			<div className="container">
				<img alt="splashscreen "id="splashimage" src="/splash_screen_image.png" />
				<img alt="logo" id="logo" src="/second_chance_logo.png" />
			</div>
		);
	}
}

export default SplashScreen;
