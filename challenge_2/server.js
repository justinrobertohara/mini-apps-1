const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');

// app.get('/', (req, res) => res.send('./client'));

app.listen(port, () =>
  console.log(`CSV Report app listening on port ${port}!`)
);

app.use(express.static('client'));
app.use(express.urlencoded());

app.post('/upload_json', (req, res) => {
  var reqData = req.body;
  // console.log(res.sendFile('/samples/csv_resport.csv'));
  // console.log('heres the response', res);
  // res.status(202);
  // res.sendFile('./samples/csv_report.csv');
  console.log(reqData);

  fs.writeFile('./samples/csv_report.csv', reqData, (err, firstData) => {
    if (err) {
      console.log(err);
    } else {
      console.log(firstData);
      fs.readFile('./samples/csv_report.csv', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.status(202);
          console.log(data);
          res.send(data);
        }
      });
    }
  });
});
