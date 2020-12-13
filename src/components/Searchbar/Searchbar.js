import React, { Component } from 'react'
import "./Searchbar.css";
import styled from 'styled-components'


class Searchbar extends Component {
    state = {
        search: ""
      }

handleInput = (event) => {
        //const value = event.target.value;
        const { value, name } = event.target;
        //console.log('value', value)
        //console.log('name', name)
        this.setState( { [name]: value } )
        
        this.props.filterProducts(value)
    }
    

    render() {
        return (
            <div className="search">
            <input
                type="text"
                className="searchbar"
                name="search"
                placeholder="🔍    Search for products"
                value={this.state.search}
                onChange={this.handleInput}
            />
            <img id="logo-icon" src="/second_chance_logo.png" />
            </div>
        )
    }
}

export default Searchbar; 