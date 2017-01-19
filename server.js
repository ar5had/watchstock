const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Stock = require('./models/stock.js');
const ASQ = require('asynquence');
const routes = require('./app/routes.js');

// loads all custom environments variables
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const app = express();

// connect database
mongoose.connect(process.env.MONGO_URI, (err) => {
    if(err) {
      console.log(`Some error happened while connecting to db - ${err}`);
    } else {
      console.log(`db connected successfully!`);
    }
  });
mongoose.Promise = global.Promise;

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes
app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
