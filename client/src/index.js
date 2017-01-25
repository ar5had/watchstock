import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Graph from './components/stock-graph/Graph.js';
import Header from './components/header/Header.js';
import Panel from './components/stock-panel/Panel.js';
import 'bootstrap-grid';
// syncronously load font first
require('./fonts/Fonts.css');
import './index.css';

class App extends Component {

  updateGraph(actionObj, graphStateData) {
    this.refs.graph.changeState(actionObj, graphStateData);
  }

  render() {
    return (
      <div className="wrapper row">
        <div className="headerWrapper row">
          <Header classes="col-xs-12" />
        </div>
        <div className="bodyWrapper row">
          <Graph ref="graph" classes="col-xs-12" />
        </div>
        <Panel ref="panel" updateGraph={this.updateGraph.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
