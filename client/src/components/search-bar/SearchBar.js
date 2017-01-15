import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form>
          <input className="searchInput" placeholder="Enter Stock Symbol"/>
          <input className="searchButton" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
