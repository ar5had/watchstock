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
    this.color = 0;
    this.config = {
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
    };

    this.state = {
      isLoading: true,
      data: []
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
            [0,
            Highcharts.Color(Highcharts.getOptions().colors[i])
            .setOpacity(0).get('rgba')],
            [1,
            Highcharts.Color(Highcharts.getOptions().colors[i])
            .setOpacity(0).get('rgba')]
        ]
      }
    }
  }

  removeAllStock() {
    this.config.series = [];
    this.setState({
      data: [],
      isLoading: false
    });
  }

  addStock(data) {
    this.config.series = [];
    const seriesData = this.getSeriesData(data.code, data.data, 0);
    this.setState({
      data: [seriesData].concat(this.state.data),
      isLoading: false
    });
  }

  // find a way to use color of removed stock
  removeStock(code) {
    this.config.series = [];
    this.setState({
      data: this.state.data.filter(elem => (elem.name !== code)),
      isLoading: false
    });
  }

  loadAllStocks(data) {
    // find better way to do it
    // data.forEach((symbol, index) => {
    //   let newConfig = this.state.config;
    //   let newStockList = []
    //   newConfig.series = [];
    //   this.fetchStockData(symbol, index, (code, name, data, i) => {
    //     newConfig.series.push(this.getSeriesData(code, data, i));
    //     newStockList.push(code);
    //     this.setState({
    //       config: newConfig,
    //       data: newStockList
    //     });
    //   });
    // });
    //
    // this.setState({
    //   isLoading: false
    // });
  }

  changeState(actionObj, data) {
    this.setState({isLoading: true});
    console.log("changestate",this.state.data);
    const action = actionObj.action;
    setTimeout(() => {
      switch (action) {
        case "LOAD_ALL":
          this.loadAllStocks(data);
          break;
        case "ADD":
          this.addStock(data);
          break;
        case "REMOVE":
          this.removeStock(actionObj.code);
          break;
        case "REMOVE_ALL":
          this.removeAllStock();
          break;
        default:
          console.error("Unhandled action:", actionObj);
      }
    }, 500);
    // // when data is empty i.e., all stocks are removed
    // if(data.length === 0) {
    //   this.removeAllStock();
    // }
    // // when previous saved data length has one item less
    // // than new data i.e., new stock added
    // else if(data.length === (this.state.data.length + 1)) {
    //   this.addStock(data[0], data.length - 1);
    // }
    // // when previous saved data length has one item more
    // // than new data i.e., stock deleted
    // else if(data.length === (this.state.data.length - 1)) {
    //   this.removeStock(data);
    // }
    // // last case which means all stock is loaded
    // // on refresh or page loading
    // else {
    //   this.loadAllStocks(data);
    // }
  }

  loadAllStocksConfig() {
    this.state.data.forEach(config => {
      this.config.series.push(config);
    });
  }

  getContent() {
    if(this.state.isLoading) {
      return <div className="main-loader" />
    } else {
      return <ReactHighstock config={this.config}
                domprops={{id: "graph"}} />;
    }
  }

  render() {
    this.loadAllStocksConfig();
    return (
      <div id="graph" className={this.props.classes}>
        {this.getContent()}
      </div>
    );
  }
}

export default Graph;
