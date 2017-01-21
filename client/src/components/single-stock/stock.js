import React, {Component} from 'react';

class Stock extends Component {

  render() {
    return (
      <div
        className={
          (this.props.hide ? "hide ": "") + "stockWrapper marB"
        }
      >
        <div className="stock">
          <h4>{this.props.code}</h4>
          <p>{this.props.description}</p>
          <button className="removeStockBtn"
            onClick={(e) => {
              e.target.parentNode.style.opacity = ".8";
              this.props.removeStock(this.props.stockId);
            }}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Stock;
