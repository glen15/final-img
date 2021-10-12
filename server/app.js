const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use((req, res, next) => {
  res.send('hi');
});

app.listen(8080);
