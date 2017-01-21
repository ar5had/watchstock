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
      data: data,
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
            [0, Highcharts.Color(Highcharts.getOptions().colors[i]).setOpacity(.4).get('rgba')],
            [1, Highcharts.Color(Highcharts.getOptions().colors[i]).setOpacity(0).get('rgba')]
        ]
      }
    }
  }

  addNewStock() {

  }

  deleteStock() {

  }
  //
  // removeAll() {
  //   this.setState(
  //     config:
  //   )
  // }

  parse(data) {
    var name = data.dataset.name.split(" ");
    return {
      code: data.dataset.dataset_code,
      name: name.slice(0, name.length - 5).join(" "),
      data: data.dataset.data.map(
        elem => [parseInt(new Date(elem[0]).getTime(), 10), parseFloat(elem[1], 10)]
      )
    };
  }

  changeState(data) {
    console.log(`data is ${data}`);
    data.forEach((symbol, index) => {
      let newConfig = this.state.config;
      newConfig.series = [];
      this.fetchStockData(symbol, index, (code, name, data, i) => {
        newConfig.series.push(this.getSeriesData(code, data, i));
        this.setState({
          config: newConfig
        }, () => {
          console.log("state is", this.state.config);
        });
      });
    });
  }

  fetchStockData(symbol, index, cb) {
    fetch(`/api/${symbol}`)
    .then(response => {
      return response.json();
    }).then(resData => {
      const {code, name, data} = this.parse(resData);
      cb(code, name, data, index);
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
