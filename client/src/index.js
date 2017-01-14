import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/stock-graph/Graph.js';
import Panel from './components/stock-panel/Panel.js';
import 'bootstrap-grid';
// syncronously load font first
require('./fonts/Fonts.css');
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
      <Graph classes="col-xs-12"/>
      <Panel classes="col-xs-12"/>
      <p className="col-xs-12">This is a cool paragraph</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
