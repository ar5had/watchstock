import React, {Component} from 'react';

class Stock extends Component {
  render() {
    return (
      <div className="stockWrapper" ref={ elem => {
          this.stockElement = elem;
        }
      }>
        <div className="stock">
          <h4>{this.props.code}</h4>
          <p>{this.props.description}</p>
          <button className="removeStockBtn"
            onClick={() => {
              this.props.removeStock(this.props.id, this.stockElement);
            }
          }>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Stock;
