import React, { Component } from 'react';
import { Link } from 'react-router-dom';                // <== IMPORT


class SearchResult extends Component {
    render() {
        return (
            <div className="container">
            <Link to={`/products/${this.props.productObj._id}`}><img style={{height: "40px"}} src={this.props.productObj.image}/>
            <p>{this.props.productObj.brand}</p></Link>
            </div>
        )
    }
}

export default SearchResult