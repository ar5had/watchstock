const routes = require('express').Router();

// routes.get('/stock/getAllStock', (req, res) => {
//     console.log("getAllStock middleware called!");
//     ASQ((done) => {
//       Stock.find({})
//         .exec((err, stocks) => {
//           if(err) {
//             done.fail(err);
//           } else {
//             done(stocks);
//           }
//         });
//     })
//     .val(stocks => {
//       console.log(`stocks are ${stocks}`);
//       res.json(stocks);
//     })
//     .or(err => {
//       console.error(`Error: ${err}`);
//     });
// });

routes.post('/stock/add', (req, res) => {
    console.log("addStock middleware called!");
    console.log(req.body);
    setTimeout(()=>{
      res.json({id: 22, code: req.body.code, description: 'Some corporation!'});
    }, 2000);
});

routes.get('/stock/remove', (req, res) => {
    console.log("removeStock middleware called!");
    console.log(req.query);
    res.json("old stock removed");
});

module.exports = routes;
