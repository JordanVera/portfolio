const dotenv = require('dotenv');
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');
const router = require('./server/index.js');

const app = express();

dotenv.config();

const port = 5555;

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));

app.use(bodyparser.json());

app.use(cors());

app.listen(port, () => {
  console.log(chalk.bgBlueBright.black(`App listening on port ${port}`));
});

app.use('/', router);
