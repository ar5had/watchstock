import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  toggle(e) {
    document.getElementById("toggleButton")
      .classList.toggle("is-active");
  }

  render() {
    return (
      <div id="header" className={this.props.classes}>
        <h3 id="logo">
          Watch Stock
        </h3>

        <button id="toggleButton" className="hamburger hamburger--elastic" type="button" onClick={this.toggle.bind(this)}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }
}

export default Header;
