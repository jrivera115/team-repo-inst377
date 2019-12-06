/* eslint-disable linebreak-style */
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
