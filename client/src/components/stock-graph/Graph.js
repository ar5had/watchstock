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
      isLoading: true,
      data: [],
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

  parse(data) {
    var name = data.dataset.name.split(" ");
    return {
      code: data.dataset.dataset_code.toUpperCase(),
      name: name.slice(0, name.length - 5).join(" "),
      data: data.dataset.data.map(
        elem => [parseInt(new Date(elem[0]).getTime(), 10), parseFloat(elem[1], 10)]
      )
    };
  }

  removeAllStock() {
    this.setState({
      config: Object.assign(this.state.config, {series: []}),
      data: []
    });
  }

  addStock(symbol, index) {
    let newConfig = this.state.config;
    this.fetchStockData(symbol, index, (code, name, data, i) => {
      newConfig.series.push(this.getSeriesData(code, data, i));
      this.setState({
        config: newConfig,
        data: [symbol].concat(this.state.data),
        isLoading: false
      });
    });
  }

  // find a way to use color of removed stock
  removeStock(data) {
    const newConfig = this.state.config;
    newConfig.series = newConfig.series.filter((elem, i) => {
      return (data.indexOf(elem.name) >= 0);
    });
    this.setState({
      config: newConfig,
      data: data,
      isLoading: false
    });
  }

  loadAllStocks(data) {
    // find better way to do it
    data.forEach((symbol, index) => {
      let newConfig = this.state.config;
      let newStockList = []
      newConfig.series = [];
      this.fetchStockData(symbol, index, (code, name, data, i) => {
        newConfig.series.push(this.getSeriesData(code, data, i));
        newStockList.push(code);
        this.setState({
          config: newConfig,
          data: newStockList
        });
      });
    });
  }

  changeState(data) {
    this.setState({isLoading: true});
    // when data is empty i.e., all stocks are removed
    if(data.length === 0) {
      this.removeAllStock();
    }
    // when previous saved data length has one item less
    // than new data i.e., new stock added
    else if(data.length === (this.state.data.length + 1)) {
      this.addStock(data[0], data.length - 1);
    }
    // when previous saved data length has one item more
    // than new data i.e., stock deleted
    else if(data.length === (this.state.data.length - 1)) {
      this.removeStock(data);
    }
    // last case which means all stock is loaded
    // on refresh or page loading
    else {
      this.loadAllStocks(data);
    }
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
    let content;
    if(true) {
      content = <div className="main-loader" />
    } else {
      content = <ReactHighstock config={this.state.config} domprops={{id: "graph"}} />;
    }

    return (
      <div id="graph" className={this.props.classes}>
        {content}
      </div>
    );
  }
}

export default Graph;
