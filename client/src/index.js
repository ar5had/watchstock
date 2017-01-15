import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/stock-graph/Graph.js';
import Header from './components/header/Header.js';
import Panel from './components/stock-panel/Panel.js';
import 'bootstrap-grid';
// syncronously load font first
require('./fonts/Fonts.css');
import './index.css';

const App = () => {
  return (
    <div className="wrapper row">
      <div className="headerWrapper row">
        <Header classes="col-xs-12" />
      </div>
      <div className="bodyWrapper row">
        <Graph classes="col-xs-12"/>
        <Panel/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
