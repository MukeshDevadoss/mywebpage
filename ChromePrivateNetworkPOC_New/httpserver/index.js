const fs = require('fs');
const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "finesse25.autobot.cvp:8443");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
  //move on
    next();
  }
});

app.get('/', (req, res, next) => {
    res.sendFile('/Users/aditysin/Git/httpserver/index.html');
});

app.get('/index.html', (req, res, next) => {
    res.sendFile('/Users/aditysin/Git/httpserver/index.html');
});

app.get('/globe.jpeg', (req, res, next) => {
    res.sendFile('/Users/aditysin/Git/httpserver/globe.jpeg');
});

// app.options('/globe.jpeg', (req, res, next) => {
//   res.set("Access-Control-Allow-Origin", "*");
//   res.sendStatus(200);
//   // res.sendFile('/Users/aditysin/Git/httpserver/globe.jpeg');
// });

app.get('/student', (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send('Hello world!');
  });

  // app.options('/student', (req, res, next) => {
  //   res.set("Access-Control-Allow-Origin", "*");
  //   res.sendStatus(200);
  // });


const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});



/**
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://127.0.0.1:3000/student", true);
xhr.send();
 */