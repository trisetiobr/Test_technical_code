const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const port = 5555;

app.use(bodyParser.json());
app.use(cors());

app.post('/segitiga', (req, res) => {
  const {
    body
  } = req;

  // validate
  if (!body.input) {
    res.status(400).send({
      message: "bad request, because input not exists",
      data: []
    });
  } else {
    let whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let requestValid = true;

    for (let i in body.input) {
      if (!whiteList.includes(body.input[i])) {
        requestValid = false;
      }
    }

    if (requestValid) {
      // generate 
      let pad = '0';
      let currentCharacter = "";

      let output = [];

      for (let i in body.input) {
        currentCharacter = body.input[i] + pad;
        output.push(currentCharacter);
        pad += '0'
      }

      res.status(200).send({
        message: "test segitiga",
        data: output
      });
    } else {
      res.status(400).send({
        message: "bad request, because input must be a number",
        data: []
      });
    }
  }
});

app.post('/bilangan-ganjil', (req, res) => {
  const {
    body
  } = req;

  // validate
  if (!body.input) {
    res.status(400).send({
      message: "bad request, because input not exists",
      data: []
    });
  } else {
    let whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '8'];
    let requestValid = true;

    const {
      input
    } = body;

    for (let i in input) {
      if (!whiteList.includes(input[i])) {
        requestValid = false;
      }
    }

    if (requestValid) {
      // generate
      let output = [];

      for (let i = 0; i <= input; i++) {
        if (i%2 !== 0) {
          output.push(i);
        }
      }

      res.status(200).send({
        message: "test bilangan ganjil",
        data: output
      });
    } else {
      res.status(400).send({
        message: "bad request, because input must be a number",
        data: []
      });
    }
  }
});

app.post('/bilangan-prima', (req, res) => {
  const {
    body
  } = req;

  // validate
  if (!body.input) {
    res.status(400).send({
      message: "bad request, because input not exists",
      data: []
    });
  } else {
    let whiteList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '8'];
    let requestValid = true;

    const {
      input
    } = body;

    for (let i in input) {
      if (!whiteList.includes(input[i])) {
        requestValid = false;
      }
    }

    if (requestValid) {
      let output = [];

      for (let i = 2; i <= input; i++) {
        primeNumber = true;

        for (let j = 0; j < output.length; j++) {
          if (i % output[j] == 0) {
            primeNumber = false;
            break;
          }
        }

        if (output.length == 0 || primeNumber == true) {
          output.push(i);
        }
      }

      res.status(200).send({
        message: "test bilangan prima",
        data: output
      });
    } else {
      res.status(400).send({
        message: "bad request, because input must be a number",
        data: []
      });
    }
  }
});

app.listen(port, () => {
  console.log(`application is running on port ${port}`);
})