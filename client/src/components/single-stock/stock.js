import React, {Component} from 'react';

class Stock extends Component {
  render() {
    return (
      <div className="stocksWrapper">
        <div className="stock">
          <h4>{this.props.code}</h4>
          <p>{this.props.description}</p>
          <button className="removeStockBtn" onClick={this.props.removeStock}>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Stock;
