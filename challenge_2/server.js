const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('./client'));

app.listen(port, () =>
  console.log(`CSV Report app listening on port ${port}!`)
);

app.use(express.static('client'));
