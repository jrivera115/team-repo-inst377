/* eslint-disable linebreak-style */
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('src'));

app.get('/api', (req, res) => {
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

app.post('/api', (req, res) => {
  res.send('incoming POST request!');
});

app.put('/api', (req, res) => {
  res.send('incoming PUT request!');
});

// eslint-disable-next-line max-len
app.listen(port, () => console.log(`Our app is running on https://safetyzone-demo.herokuapp.com/ and port: ${port}!`));
