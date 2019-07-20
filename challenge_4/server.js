const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Connect 4 listening on port ${port}!`));
