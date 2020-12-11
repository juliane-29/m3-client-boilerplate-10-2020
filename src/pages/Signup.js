import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../context/auth-context';

class Signup extends Component {
  state = { 
    username: "", 
    password: "",
    email: "",
     };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, 
            password, 
            email
             } = this.state;
  // Call function coming from AuthProvider ( via withAuth )
  // Wrapped in 
    this.props.signup( username, password, email);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <img style={{height:"90px"}} alt="logo" id="logo" src="/second_chance_logo.png" />
        <h1>Let's get started</h1>
        <p>Create a new account</p>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}



export default withAuth(Signup);


// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;