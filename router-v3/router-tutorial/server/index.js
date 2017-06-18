const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build')));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
