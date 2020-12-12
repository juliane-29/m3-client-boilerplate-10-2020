import React, { Component } from 'react'
import axios from "axios";
import { withAuth } from '../../context/auth-context';

class EditProfile extends Component {
    state = {
        username: "", 
        email: "", 
        firstName: "",
        lastName: "",
        image: "",
        bio:""
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        const {username, email, fistName, lastName, image, bio} = this.state
        const { userId } = this.props.user._id

        axios.put("http://localhost:5000/api/auth/user", 

        )
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
            <input
            type="text"
            name="username"
            value={this.props.user.username}
            placeholder="Username"
            />

            <input
            type="text"
            name="email"
            value={this.props.user.username}
            placeholder="Email"
            />  

            <input
            type="text"
            name="firstName"
            value={this.props.user.username}
            placeholder="First Name"
            />  

            <input
            type="text"
            name="lastName"
            value={this.props.user.username}
            placeholder="Last Name"

            /> 

            <input
            type="file"
            name="image"
            value={this.props.user.username}
            placeholder="Image"

            /> 

            <input
            type="text"
            name="bio"
            value={this.props.user.username}
            placeholder="Bio"

            /> 

            <input 
            type="submit" 
            value="Submit" 

            />

            </form>
            </div>
        )
    }
}

export default withAuth(EditProfile)