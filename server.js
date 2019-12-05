/* eslint-disable linebreak-style */
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser'); // for post req
//const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// POST REQUEST
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use(express.static('src'));


app.get('/api', (req, res) => {
  // eslint-disable-next-line max-len
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  fetch(baseURL)
    .then((r) => r.json())
    .then((r) => r.map((dataset) => dataset))
    .then((data) => {
      console.log(data);
      res.send({ data: data });
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/error');
    });
});

app.post('/api/post', (req, res) => {
  res.json({
    message: 'POST!!!!'
  });
});
// PUT request
app.put('/api/put', (req, res) => {
  res.json({
    message: 'PUT!!!!'
  });
});


// eslint-disable-next-line max-len
app.listen(port, () => console.log(`Our app is running on https://safetyzone-demo.herokuapp.com/ and port: ${port}!`));
