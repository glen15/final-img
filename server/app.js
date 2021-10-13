const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(morgan('tiny'));

app.get('/a', (req, res, next) => {
  res.status(200).send('get/a');
});

app.use((req, res, next) => {
  res.send('hi');
});

const port = 80;
app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
