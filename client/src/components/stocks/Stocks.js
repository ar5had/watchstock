import React, { Component } from 'react';
import './Stocks.css';

class Stocks extends Component {
  constructor(props) {

      super(props);
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
    console.log("removeStock called");
  }

  getCurrentStocks() {
    let stocks = this.state.stocks.map(stock => {
      return (
        <div className="stocksWrapper">
          <div className="stock">
            <h4>stock.code</h4>
            <p>stock.description</p>
            <span className="removeStockBtn" onClick={this.removeStock.bind(this)}>
              x
            </span>
          </div>
      );
    });
    console.log("Stocks", stocks);
    return stocks;
  }

  render() {
    const stocks = this.getCurrentStocks();
    return (
      <div id="stocks" className={this.props.classes}>
        {stocks}
      </div>
    );
  }
}

export default Stocks;
