import React, { Component } from 'react';
import Stock from '../single-stock/stock';
import './Stocks.css';

class Stocks extends Component {
  removeStock(id, element) {
    fetch(`/stock/remove?remove=${id}`, {
    	method: 'get'
    }).then(response => {
      // if status is 200/OK
      // hide element in fancy way
      element.classList.add("hide");
      return response.json();
    }).then(data => {
      const newState = this.props.stocks.filter(elem => {
        return (elem.id !== id);
      });
      setTimeout(()=>{
        element = null;
        this.props.changeParentState(newState, null);
      }, 2000);
    }).catch(err => {
    	console.error("Error happened while making /stock/remove req:", err);
    });
  }

  getCurrentStocks() {
    console.log(`state is ${this.props.stocks}`);
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
