import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Stocks from '../stocks/Stocks';
import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      stocks: [{
        id: "1",
        code: "ASD",
        description: "bcd"
      }]
    };
    this.getInitStocks()
  }

  getInitStocks() {
    fetch('/stock/getAllStock', {
      method: 'get'
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        stocks: data
      });
    }).catch(err => {
      console.error("Error happened while making /stock/getAllStock req:", err);
    });
  }

  updateState(obj, cb) {
    this.setState({stocks: obj}, cb);
  }

  addStock(obj, cb) {
    let newState = [obj];
    newState = newState.concat(this.state.stocks);
    this.setState({stocks: newState}, cb);
  }

  render() {
    console.log(`this.data in render is ${this.data}`);
    return (
      <div id="panel" className={this.props.classes}>
        <h3 className="panel">Add/Remove Stocks</h3>
        <SearchBar addStock={this.addStock.bind(this)}/>
        <Stocks changeParentState={this.updateState.bind(this)} stocks={this.state.stocks} />
      </div>
    );
  }
}

export default Panel;
