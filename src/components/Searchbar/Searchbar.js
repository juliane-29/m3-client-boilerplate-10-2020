import React, { Component } from 'react'
import "./Searchbar.css";
import styled from 'styled-components'

const Search = styled.input`
  border: 2.5px solid #EBF0FF;
  width: 90vw;
  height: 5vh;
  color: #9098B1;
  font-family: Poppins;
  font-size: 12px;
  font-weight: regular;
  border-radius: 5px;
`

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
            <div className="">
            <Search
                type="text"
                className="search-bar"
                name="search"
                placeholder="Search Product"
                value={this.state.search}
                onChange={this.handleInput}
            />
            <img id="logo-icon" src="/second_chance_logo.png" />
            </div>
        )
    }
}

export default Searchbar; 