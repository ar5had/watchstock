import React, { Component } from 'react';
import './Stocks.css';

class Stocks extends Component {
  getCurrentStocks() {
    return (
      <div className="stocksWrapper">
        <div className="stock">
          <h4>APPL</h4>
          <p>Apple Enterprises</p>
          <span className="removeStock">
            x
          </span>
        </div>
        <div className="stock">
          <h4>APPL</h4>
          <p>Apple Enterprises</p>
          <span className="removeStock">
            x
          </span>
        </div>
      </div>
    );
  }

  render() {
    var stocks = this.getCurrentStocks();
    return (
      <div id="stocks" className={this.props.classes}>
        {stocks}
      </div>
    );
  }
}

export default Stocks;
