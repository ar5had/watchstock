import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/stock-graph/Graph.js';
import Panel from './components/stock-panel/Panel.js';
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
      <Graph />
      <Panel />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
