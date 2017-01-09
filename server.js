const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// loads all custom environments variables
if (process.env.NODE_ENV !== "production") {
  require('dotenv').load();
}

const app = express();

// connect database
//mongoose.connect(process.env.MONGO_URI);
//mongoose.Promise = global.Promise;

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

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
