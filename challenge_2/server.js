const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');
var jsonData = require('./samples/sales_report.js');

// app.get('/', (req, res) => res.send('./client'));

app.listen(port, () =>
  console.log(`CSV Report app listening on port ${port}!`)
);

app.use(express.static('client'));
app.use(express.urlencoded());


//flatten json Data 
// function flattenObj(obj) {
  
//   var newArrObj = [];
//   newArrObj.push(obj);


// if (obj.children.length > 0){
//   for (let i = 0; i < obj.children.length; i++){
//     var newFlat = obj.children[i]
//     if (newFlat.children) {
//       for (let j = 0; j < newFlat.children.length; j++){
//         newArrObj.push(newFlat.children[j])
//       }
//     }
//     newArrObj.push(newFlat)
//   }
// }
// return newArrObj;
// }

app.post('/upload_json', (req, res) => {
  var reqData = jsonData;

  // console.log(res.sendFile('/samples/csv_resport.csv'));
  // console.log('heres the response', res);
  // res.status(202);
  // res.sendFile('./samples/csv_report.csv');
  // console.log('reqdata.data', reqData.data);

  console.log(jsonData);

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
          res.send(JSON.stringify(data));
        }
      });
    }
  });
});
