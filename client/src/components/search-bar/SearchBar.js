import React, { Component } from 'react';
import {socketConnect} from 'socket.io-react';

import './SearchBar.css';
import Form from '../form/Form.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  emitRemoveAllEvent(code) {
    this.props.socket.emit('removeAllStock');
    this.props.socket.emit('notify', {name: 'REMOVE_ALL'});
  }

  changeState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id="searchBar" className="marS">
        <Form addStock={this.props.addStock} changeParentState={this.changeState.bind(this)} />
        <div className="marB" id="removeAllWrapper">
          <button id="removeAll" onClick={
            () => {
              Array.prototype.forEach.call(
                document.querySelectorAll(".stock"),
                elem => {
                    elem.style.opacity = ".8";
                });
              this.emitRemoveAllEvent();
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

export default socketConnect(SearchBar);
