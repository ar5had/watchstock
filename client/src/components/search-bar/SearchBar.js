import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form>
          <input className="searchInput" placeholder="Enter Stock Code"/>
          <input className="searchButton" type="submit" value="Add" />
        </form>
        <div className="messageArea">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
