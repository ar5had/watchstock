import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/stock-graph/Graph.js';
import Panel from './components/stock-panel/Panel.js';
import 'bootstrap-grid';
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
      <Graph classes="col-xs-12"/>
      <Panel classes=""/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
