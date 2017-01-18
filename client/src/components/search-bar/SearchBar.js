import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  makexhr() {
    // const xhr = new XMLHttpRequest();
    // xhr.
    // xhr.open('/addStock');
    // xhr.send(null);
  }

  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form method="get" action="/addStock">
          <input name="searchInput" className="searchInput" placeholder="Enter Stock Code" required/>
          <input className="searchButton" type="submit" value="Add" />
        </form>
        <div className="messageArea">
          <div className="loader marB"></div>
          <div className="msg marB">
            Enter correct stock code!
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
