import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar';
import Stocks from '../stocks/Stocks';
import './Panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      stocks: []
    };
  }

  changeState(data, changeGraphState) {
    this.setState({
      stocks: data
    },() => {
      if(changeGraphState) {
        this.props.updateGraph(
          this.state.stocks.map(stock => stock.code)
        );
      }
    });
  }

  getInitStocks() {
    fetch('/stock/getAllStock', {
      method: 'get'
    }).then(response => {
      return response.json();
    }).then(data => {
      this.changeState(data, true);
    }).catch(err => {
      console.error("Error happened while making /stock/getAllStock req:", err);
    });
  }

  addStock(obj, cb) {
    let newState = [obj];
    newState = newState.concat(this.state.stocks);
    // graph state must change on addition of each stock
    this.changeState(newState, true);
  }

  removeAllStock() {
    this.refs.stocks.removeAllStock();
  }

  componentWillMount() {
    this.getInitStocks();
  }

  render() {
    return (
      <div id="panel" className={this.props.classes}>
        <h3 className="panel">Add/Remove Stocks</h3>
        <SearchBar addStock={this.addStock.bind(this)} removeAllStock={this.removeAllStock.bind(this)}/>
        <Stocks changeParentState={this.changeState.bind(this)} stocks={this.state.stocks} ref="stocks"/>
      </div>
    );
  }
}

export default Panel;
