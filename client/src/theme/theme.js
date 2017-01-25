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

import randomColor from 'randomcolor';

export default function setTheme(Highcharts) {

  Highcharts.theme = {
     colors: randomColor({luminosity: 'light', alpha: .8, count: 40}),
     chart: {
        backgroundColor: null,
        style: {
           fontFamily: '\'Courier Prime\', monospace',
           fontWeight: 'normal',
           fontStyle: 'normal',
           color: '#aaa'
        }
     },
     title: {
        style: {
           color: '#ccc',
           fontSize: '20px',
           fontWeight: 'bold'
        }
     },
     subtitle: {
        style: {
           color: '#eee',
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
       backgroundColor: '#2b2833',
        useHTML: true,
        style: {
           color: '#aaa'
        },
        borderRadius: '2',
        borderColor: '#666',
        borderWidth: 2,
        followTouchMove: true
     },
     plotOptions: {
        series: {
          animation: {
            duration: 1000,
            easing: 'easeOutBounce'
          },
          dataLabels: {
            color: '#B0B0B3'
          },
          marker: {
            lineColor: '#2b2833'
          },
          lineColor: 'rgba(0,0,0,0)'
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
           color: 'rgba(0,0,0,0)'
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
        allButtonsEnabled: true,
        buttonSpacing: 7,
        buttonTheme: {
           fill: 'rgba(255,255,255,0.08)',
           stroke: '#eee',
           r: 0,
           style: {
              color: '#aaa'
           },
           states: {
              hover: {
                 fill: '#aaa',
                 stroke: '#aaa',
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
        inputBoxBorderColor: '#666',
        inputBoxWidth: 120,
        inputBoxHeight: 18,
        inputStyle: {
           backgroundColor: '#2b2833',
           color: '#ccc',
           outline: 'rgba(0,0,0,0)'
        },
        labelStyle: {
           color: '#ccc',
           fontWeight: 'bold'
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
           lineColor: 'rgba(0,0,0,0)'
        },
        xAxis: {
           gridLineColor: '#444'
        }
     },


     scrollbar: {
        barBackgroundColor: 'rgba(255,255,255,0.08)',
        barBorderColor: '#444',
        buttonArrowColor: '#666',
        buttonBackgroundColor: 'rgba(255,255,255,0.08)',
        buttonBorderColor: '#444',
        rifleColor: '#666',
        trackBackgroundColor: '#2b2833',
        trackBorderColor: '#444'
     },

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
