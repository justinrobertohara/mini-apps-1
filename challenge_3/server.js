const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/checkout', function(req, res) {
  console.log(req.body);
  res.send('you have posted data');
});

app.listen(port, () => console.log(`Checkout app listening on port ${port}!`));
