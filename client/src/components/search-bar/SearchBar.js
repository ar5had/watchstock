import React, { Component } from 'react';
import './SearchBar.css';
const FontAwesome = require('react-fontawesome');


class SearchBar extends Component {
  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form>
          <input className="searchInput" placeholder="Enter Stock Code"/>
          <input className="searchButton" type="submit" value="Add" />
        </form>
        <div className="messageArea">

        </div>
      </div>
    );
  }
}

export default SearchBar;
