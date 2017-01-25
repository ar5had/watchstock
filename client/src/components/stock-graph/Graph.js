import React, { Component } from 'react';
import './Graph.css';
import setTheme from '../../theme/theme.js';
import ReactHighstock from 'react-highcharts/ReactHighstock';
import image from '../../images/stock.svg';

// applying theme
let Highcharts = ReactHighstock.Highcharts;
setTheme(Highcharts);

class Graph extends Component {
  constructor(props) {
    super(props);
    this.colorCounter = 0;
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
            .setOpacity(0.6).get('rgba')],
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
    this.colorCounter = 0;
  }

  addStock(data) {
    this.config.series = [];
    const seriesData = this.getSeriesData(data.code, data.data, this.colorCounter);
    this.setState({
      data: [seriesData].concat(this.state.data),
      isLoading: false
    });

    this.colorCounter++;
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
    const seriesData = data.map((elem, ) => {
      return this.getSeriesData(elem.code, elem.data, ++this.colorCounter);
    });
    this.setState({
      data: seriesData.concat(this.state.data),
      isLoading: false
    });
  }

  changeState(actionObj, data) {
    this.setState({isLoading: true});
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
  }

  loadAllStocksConfig() {
    this.state.data.forEach(config => {
      this.config.series.push(config);
    });
  }

  getContent() {
    if(this.state.isLoading) {
      return <div className="main-loader" />
    } else if(this.state.data.length > 0) {
      return <ReactHighstock config={this.config}
                domprops={{id: "graph"}} />;
    } else {
      return  (<div className="noStockContent">
                <img src={image} alt="stock"/>
                <h2 className="noStockHeading">
                  No Stock added! To add stock, open sidebar and add stock.
                </h2>
              </div>);
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
