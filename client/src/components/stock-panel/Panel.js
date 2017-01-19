import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Stocks from '../stocks/Stocks';
import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [
        {
          id : 1,
          code: "APPL",
          description: "Apple corporations"
        },
        {
          id : 2,
          code: "MSFT",
          description: "Microsoft corporations"
        },
        {
          id : 3,
          code: "TSLA",
          description: "Tesla corporations"
        },
        {
          id : 4,
          code: "FB",
          description: "Facebook corporations"
        }
      ]
    };
  }
  render() {
    return (
      <div id="panel" className={this.props.classes}>
        <h3 className="panel">Add/Remove Stocks</h3>
        <SearchBar />
        <Stocks setState={this.setState} stocks={this.state.stocks} />
      </div>
    );
  }
}

export default Panel;
