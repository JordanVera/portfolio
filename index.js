const dotenv = require('dotenv');
const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');
const router = require('./server/index.js');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.join(path.resolve(path.dirname('')), '/build/index.html')
    );
  });
}

app.listen(port, () => {
  console.log(chalk.bgBlueBright.black(`App listening on port ${port}`));
});

app.use('/', router);
