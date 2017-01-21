import React, { Component } from 'react';
import './Graph.css';
import setTheme from '../../theme/theme.js';
import ReactHighstock from 'react-highcharts/ReactHighstock';

// applying theme
let Highcharts = ReactHighstock.Highcharts;
setTheme(Highcharts);

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {

      config: {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'Stocks'
        },
        series: [],
        responsive: {
          rules: [{
              condition: {
                  maxWidth: "500"
              },
              chartOptions: {
                  subtitle: {
                      text: null
                  },
                  navigator: {
                      enabled: false
                  }
              }
          }]
        }
      }

    }
  }

  getSeriesData(name, data, i) {
    return {
      name: name,
      type: "area",
      data: [],
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        },
        stops: [
            [0, Highcharts.Color(Highcharts.getOptions().colors[i]).setOpacity(.7).get('rgba')],
            [1, Highcharts.Color(Highcharts.getOptions().colors[i]).setOpacity(0).get('rgba')]
        ]
      }
    }
  }

  parse(data) {

    return  {
      name: name,
      data: data,
      i: i
    }
  }
  //
  // removeAll() {
  //   this.setState(
  //     config:
  //   )
  // }

  changeState(data) {
    let newConfig = this.state.config;
    newConfig.series = data.map((symbol, i) => {
      this.fetchStockData(symbol, response => {
        console.log(`i is ${i}`);

      });
    });
    this.setState({
      config: newConfig
    });
  }

  fetchStockData(symbol, cb) {
    fetch(`/api/${symbol}`)
    .then(response => {
      return response.json();
    }).then(data => {
      cb(parse(data));
    }).catch(err => {
      console.error(`Error happened while making /api/symbol req: ${err}`);
    });
  }

  render() {
    return (
      <div id="graph" className={this.props.classes}>
        <ReactHighstock config={this.state.config} domprops={{id: "graph"}} />
      </div>
    );
  }
}

export default Graph;
