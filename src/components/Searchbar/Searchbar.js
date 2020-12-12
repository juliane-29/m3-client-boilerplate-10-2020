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
  margin: 10px 0px 10px 0px; `


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
            <div className="container">
            <Search
                type="text"
                className="search-bar"
                name="search"
                placeholder="Search Product"
                value={this.state.search}
                onChange={this.handleInput}
            />
            <img id="searchbar-icon" src="/Search.png" />
            </div>
        )
    }
}

export default Searchbar; 