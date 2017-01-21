const routes = require('express').Router();
const ASQ = require('asynquence');
const mongoose = require('mongoose');
const Stock = require('../models/stock.js');

routes.get('/stock/getAllStock', (req, res) => {
  ASQ((done) => {
    Stock.find({})
      .exec((err, stocks) => {
        if(err) {
          done.fail(err);
        } else {
          done(stocks);
        }
      });
  })
  .val(stocks => {
    res.json(stocks);
  })
  .or(err => {
    console.error(`Error: ${err}`);
  });
});

routes.post('/stock/add', (req, res) => {
  ASQ(req.body.code)
  .then((done, msg) => {
    var stock = new Stock();
    stock.hide = false;
    stock.code = msg;
    stock.description = "Some random description";
    stock.id = Math.random();
    done(stock);
  })
  .then((done, stock) => {
    stock.save((err, doc) => {
      if(err) {
        throw err;
      }
      done(doc);
    });
  })
  .val(stock => {
    res.json(stock);
  })
  .or(err => {
    console.error(`Error: ${err}`);
  });
});

routes.delete('/stock/remove', (req, res) => {
  ASQ(req.query.remove)
  .then((done, msg) => {
    Stock.findOneAndRemove({"id": msg})
      .exec(err => {
        if(err) {
          throw err;
        } else {
          done();
        }
      });
  })
  .then((done) => {
    res.status(200).send();
    done();
  })
  .or(err => {
    console.error(`Error: ${err}`);
  });
});

routes.delete('/stock/removeAll', (req, res) => {
  ASQ(done => {
    Stock.remove({})
      .exec(err => {
        if(err) {
          throw err;
        } else {
          done();
        }
      });
  })
  .then((done) => {
    res.status(200).send();
    done();
  })
  .or(err => {
    console.error(`Error: ${err}`);
  });
});


module.exports = routes;
