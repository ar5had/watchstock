import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.emptyCodeMsg = (<div className="msg marB">
                          Empty input, enter valid code!
                        </div>);
    this.wrongCodeMsg = (<div className="msg marB">
                          Wrong stock code, enter correct code!
                        </div>);
    this.stockExistsMsg = (<div className="msg marB">
                            Stock already exists!
                          </div>);
    this.loader = (<div className="loader marB" />);
  }

  makexhr(e) {
    e.preventDefault();
    const text = this.textInput.value.trim().toUpperCase();
    if(!text) {
      this.setState({
        message: this.emptyCodeMsg
      });
    } else if(this.props.stockList
              .indexOf(text) !== -1) {
      this.setState({
        message: this.stockExistsMsg
      });
    } else {
      this.setState({
        message: this.loader
      });
      fetch('/stock/add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: this.textInput.value.toUpperCase()
        })
      }).then(response => {
        if(response.status === 200) {
          return response.json();
        } else {
          this.setState({
            message: this.wrongCodeMsg
          });
        }
      }).then(data => {
        this.props.addStock(data);
        this.textInput.value = "";
        this.setState({
          message: ""
        });
      }).catch(err => {
        console.error("Error happened while making /stock/add req:", err);
      });
    }
  }

  render() {
    return (
      <div id="searchBar" className={this.props.classes}>
        <form onSubmit={this.makexhr.bind(this)} id="addStockForm">
          <input name="searchInput" type="text" className="searchInput"
            placeholder="Stock Code"
            ref={
              input => {
                this.textInput = input;
              }
            }
            autoComplete="off"
          />
          <input className="searchButton" type="submit" value="Add" />
        </form>
        <div className="marB" id="removeAllWrapper">
          <button id="removeAll" onClick={
            () => {
              Array.prototype.forEach.call(
                document.querySelectorAll(".stock"),
                elem => {
                    elem.style.opacity = ".8";
                });
              this.props.removeAllStock();
            }
          }>
            Remove All
          </button>
        </div>
        <div className="messageArea marB"
          ref={(elem) => {
            this.msgArea = elem;
          }}
        >
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default SearchBar;
