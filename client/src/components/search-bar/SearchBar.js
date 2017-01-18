import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  makexhr(e) {
    e.preventDefault();
    console.log("event is",e);
    fetch('/stock/add', {
    	method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log("data is", data);
    }).catch(function(err) {
    	console.error("Error happened while making /stock/add req:", err);
    });
  }

  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form onSubmit={this.makexhr.bind(this)}>
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
