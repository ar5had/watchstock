var rp = require('request-promise');
var moment = require('moment');

const getApiUrl = (symbol, date) => {
  return `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}\
/data.json?start_date=${date}&api_key=${process.env.QKEY}`;
};

const getStockData = symbol => {
  const startDate = moment().subtract(1, 'month').format('YYYY-MM-DD');
  const url = getApiUrl(symbol, startDate);
  const reqOpt = {
    url: url,
    json: true
  };
  return rp(reqOpt);
};

module.exports = getStockData;
