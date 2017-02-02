import React, { Component } from 'react';
import {socketConnect} from 'socket.io-react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      suggestions: []
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
    this.hideSuggestions();
    const text = this.textInput.value.trim().toUpperCase();
    if(!text) {
      this.props.changeParentState({
        message: this.emptyCodeMsg
      });
    }  else {
      this.props.changeParentState({
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
        } else if (response.status === 400) {
          this.props.changeParentState({
            message: this.stockExistsMsg
          });
          throw new Error(response);
        } else {
          this.props.changeParentState({
            message: this.wrongCodeMsg
          });
          throw new Error(response);
        }
      }).then(data => {
        this.props.socket.emit("addStock",data);
        this.props.socket.emit('notify', {name: 'ADD', code: data.code});
        this.props.addStock(data);
        this.textInput.value = "";
        this.props.changeParentState({
          message: ""
        });
      }).catch(err => {
        console.error("Error happened while making /stock/add req:", err);
      });
    }
  }

  // Graph dimension is dependent on viewport height.
  // This method restricts resiszing of graph when android's keyboard is opened
  inputFocus() {
    const graphWrapper = document.querySelector(".wrapper");
    graphWrapper.style.height = `${graphWrapper.offsetHeight}px`;
  }

  inputBlur(e) {
    const graphWrapper = document.querySelector(".wrapper");
    graphWrapper.style.height = "100%";
  }

  hideSuggestions() {
    const suggestions = document.querySelector('.suggestions');
    suggestions.classList.remove("show");
  }

  handleInputChange(e, code) {
    this.displaySuggestions();
    const text = (e === null) ? code : e.target.value;
    this.setState({
      searchText: text
    }, () => {console.log("callback called");});
  }

  displaySuggestions() {
    const suggestions = document.querySelector('.suggestions');
    suggestions.classList.add('show');
    const matches = this.findMatches(this.textInput.value, this.codes);

    let elems = matches.map(stock => {
      let description = stock.description.split(" ");
      description = description.slice(0, description.length - 6).join(" ");
      return  (<li
                key={Math.random()}
                onClick={() => {
                  this.setState({searchText: stock.code}, () => {
                    this.hideSuggestions();
                  });
                }}
                >
                <span className="name">{stock.code}</span>
                <span className="description">{description}</span>
              </li>);
    });

    if(elems.length > 0) {
      elems.unshift(
        <li key={Math.random()} className="li-suggestion">
          Suggestions
        </li>
      );
    }

    this.setState({suggestions: elems});
  }


  findMatches(wordToMatch, codes) {
    return codes.filter(stock => {
      const regex = new RegExp(wordToMatch, 'gi');
      return stock.description.match(regex);
    });
  };

  componentDidMount() {
    this.codes = [];
    fetch('/codes')
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.codes.push(...data);
    });
  }

  render() {
    return(
      <form onSubmit={this.makexhr.bind(this)} id="addStockForm">
        <input name="searchInput" type="text"
          className="searchInput" onFocus={this.inputFocus.bind(this)}
          placeholder="Stock Code" onBlur={this.inputBlur.bind(this)}
          ref={
            input => {
              this.textInput = input;
            }
          }
          value={this.state.searchText}
          autoComplete="off"
          onChange={this.handleInputChange.bind(this)}
        />
        <ul className="suggestions">
          {this.state.suggestions}
        </ul>
        <input className="searchButton" type="submit" value="Add" />
      </form>
    );
  }
}

export default socketConnect(Form);
