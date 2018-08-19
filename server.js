
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();


require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'dist/Commerce')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'));


app.listen(port, () => console.log(`Express server listening on port ${port}`));

