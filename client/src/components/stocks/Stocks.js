import React, { Component } from 'react';
import Stock from '../single-stock/stock';
import './Stocks.css';

class Stocks extends Component {
  constructor(props) {
    super(props);
  }

  removeStock(id, element) {
    fetch('/stock/remove', {
    	method: 'get'
    }).then(response => {
      // if status is 200/OK
      // hide element in fancy way
      // element.classList.add("hide");
      return response.json();
    }).then(data => {
      const newState = this.state.stocks.filter(elem => {
        return (elem.id !== id);
      });

      this.props.setState({stocks: newState}, ()=> {
        console.log(this.props.stocks);
      });
    }).catch(err => {
    	console.error("Error happened while making /stock/remove req:", err);
    });
  }

  getCurrentStocks() {
    let stocks = this.props.stocks.map((stock, i) => {
      return (
        <Stock key={i} code={stock.code} description={stock.description} removeStock={this.removeStock.bind(this)} id={stock.id}/>
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
