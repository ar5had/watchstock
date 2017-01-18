import React, { Component } from 'react';
import Stock from '../single-stock/stock';
import './Stocks.css';

class Stocks extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [
        {
          code: "APPL",
          description: "Apple corporations"
        },
        {
          code: "APPL",
          description: "Apple corporations"
        },
        {
          code: "APPL",
          description: "Apple corporations"
        },
        {
          code: "APPL",
          description: "Apple corporations"
        }
      ]
    };
  }

  removeStock() {
    fetch('/stock/remove', {
    	method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log("data is", data);
    }).catch(function(err) {
    	console.error("Error happened while making /stock/remove req:", err);
    });
  }

  getCurrentStocks() {
    let stocks = this.state.stocks.map((stock, i) => {
      return (
        <Stock key={i} code={stock.code} description={stock.description} removeStock={this.removeStock} />
      );
    });
    return stocks;
  }

  render() {
    const stocks = this.getCurrentStocks();;
    return (
      <div id="stocks" className={this.props.classes}>
        {stocks}
      </div>
    );
  }
}

export default Stocks;
