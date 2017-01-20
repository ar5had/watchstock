const routes = require('express').Router();
const ASQ = require('asynquence');
const mongoose = require('mongoose');
const Stock = require('../models/stock.js');

routes.get('/stock/getAllStock', (req, res) => {
    console.log("getAllStock middleware called!");

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
      console.log(`stocks are ${stocks}`);
      res.json(stocks);
    })
    .or(err => {
      console.error(`Error: ${err}`);
    });

});

routes.post('/stock/add', (req, res) => {
    console.log("addStock middleware called!");
    console.log(req.body);

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

routes.get('/stock/remove', (req, res) => {
    console.log("removeStock middleware called!");
    console.log(req.query);
    res.json("old stock removed");
});

module.exports = routes;
