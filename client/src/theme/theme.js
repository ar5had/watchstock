/**
 * (c) 2010-2016 Torstein Honsi
 *
 * License: www.highcharts.com/license
 *
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 *
 * Modified by Arshad Khan
 */

export default function setTheme(Highcharts) {

  Highcharts.theme = {
     colors: ['#8c3298', '#008497', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
     chart: {
        backgroundColor: null,
        style: {
           fontFamily: '\'Courier Prime\', monospace',
           fontWeight: 'normal',
           fontStyle: 'normal'
        }
     },
     title: {
        style: {
           color: '#eee',
           textTransform: 'uppercase',
           fontSize: '20px',
           fontWeight: 'bold'
        }
     },
     subtitle: {
        style: {
           color: '#eee',
           textTransform: 'uppercase'
        }
     },
     xAxis: {
        gridLineColor: '#eee',
        labels: {
           style: {
              color: '#aaa'
           }
        },
        lineColor: '#444',
        minorGridLineColor: '#444',
        tickColor: '#444',
        tickWidth: 0,
        title: {
           style: {
              color: '#444'

           }
        }
     },
     yAxis: {
        gridLineColor: '#444',
        labels: {
           style: {
              color: '#aaa'
           }
        },
        lineColor: '#444',
        minorGridLineColor: '#444',
        tickColor: '#444',
        tickWidth: 0,
        title: {
           style: {
              color: '#444'
           }
        }
     },
     tooltip: {
        backgroundColor: '#222',
        style: {
           color: '#eee'
        }
     },
     plotOptions: {
        series: {
           dataLabels: {
              color: '#B0B0B3'
           },
           marker: {
              lineColor: '#2b2833'
           }
        },
        boxplot: {
           fillColor: '#505053'
        },
        candlestick: {
           lineColor: 'white'
        },
        errorbar: {
           color: 'white'
        }
     },
     legend: {
        itemStyle: {
           color: '#eee'
        },
        itemHoverStyle: {
           color: '#FFF'
        },
        itemHiddenStyle: {
           color: '#606063'
        }
     },
     credits: {
        style: {
           color: '#666'
        }
     },
     labels: {
        style: {
           color: '#707073'
        }
     },

     drilldown: {
        activeAxisLabelStyle: {
           color: '#F0F0F3'
        },
        activeDataLabelStyle: {
           color: '#F0F0F3'
        }
     },

     navigation: {
        buttonOptions: {
           symbolStroke: '#DDDDDD',
           theme: {
              fill: '#505053'
           }
        }
     },

     // scroll charts
     rangeSelector: {
        buttonTheme: {
           fill: '#242128',
           stroke: '#eee',
           style: {
              color: '#eee'
           },
           states: {
              hover: {
                 fill: '#aaa',
                 stroke: '#eee',
                 style: {
                    color: '#2b2833'
                 }
              },
              select: {
                 fill: '#aaa',
                 stroke: '#2b2833',
                 style: {
                    color: '#2b2833'
                 }
              }
           }
        },
        inputBoxBorderColor: '#444',
        inputStyle: {
           backgroundColor: '#2b2833',
           color: '#aaa'
        },
        labelStyle: {
           color: '#eee'
        }
     },

     navigator: {
        handles: {
           backgroundColor: '#666',
           borderColor: '#444'
        },
        outlineColor: '#444',
        maskFill: 'rgba(255,255,255,0.08)',
        series: {
           color: '#777',
           lineColor: '#aaa'
        },
        xAxis: {
           gridLineColor: '#444'
        }
     },


     scrollbar: {
        barBackgroundColor: '#2b2833',
        barBorderColor: '#444',
        buttonArrowColor: '#444',
        buttonBackgroundColor: '#2b2833',
        buttonBorderColor: '#444',
        rifleColor: '#666',
        trackBackgroundColor: '#2b2833',
        trackBorderColor: '#444'
     },

     // special colors for some of the
     legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
     background2: '#444',
     dataLabelsColor: '#aaa',
     textColor: '#aaa',
     contrastTextColor: '#red',
     maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

}
