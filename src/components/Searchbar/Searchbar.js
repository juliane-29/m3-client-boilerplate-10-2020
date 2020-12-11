import React, { Component } from 'react'
import "./Searchbar.css";


class Searchbar extends Component {
    state = {
        search: ""
      }

handleInput = (event) => {
        // const value = event.target.value;
        const { value, name } = event.target;

        this.setState( { [name]: value } )
    }
    

    render() {
        return (
            <div>
            <input
                type="text"
                className="search-bar"
                name="search"
                placeholder="Search Product"
                value={this.state.search}
                onChange={this.handleInput}
            />
            </div>
        )
    }
}

export default Searchbar; 