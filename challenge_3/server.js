const express = require('express');
const app = express();
const port = 3000;
const BillingInfoModel = require('./database/model');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/checkout', function(req, res) {
  console.log(req.body);
  var data = req.body.clientCheckout;
  BillingInfoModel.create({
    name: data.name,
    email: data.email,
    password: data.password,
    address1: data.address1,
    address2: data.address2,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    cc: data.cc,
    expiryDate: data.expiryDate,
    cvv: data.cvv,
    billingZip: data.billingZip
  })
    .then(() => {
      console.log('we have created a user');
      res.status(202).send('you have uploaded a user to the database');
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Checkout app listening on port ${port}!`));
