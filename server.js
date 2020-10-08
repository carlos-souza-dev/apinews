const express = require('express');
require("dotenv").config();
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParse = require('body-parser');
const favicon = require('express-favicon');
const path = require('path');
const { Console } = require('console');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.json());
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

app.get('/api', function (req, res) {

    const response = fetch(`${process.env.APP_URL}everything?q=*&apiKey=${process.env.APP_KEY}&pageSize=100`);
    response.then((res)=>{
      return res.json();
    }).then((json)=>{ 
      res.send(json)
    })
});

app.get('/api/brasil', function (req, res) {

  const response = fetch(`${process.env.APP_URL}top-headlines?country=pt&from=${today}&to=${today}&apiKey=${process.env.APP_KEY}&pageSize=100`);
  response.then((res)=>{
    return res.json();
  }).then((json)=>{
    res.send(json)
  })
});

// app.post('/api/brasil/search', async  (req, res) => {

//   const text = await ""+req.body.text;
  
//   const response = await fetch(`${process.env.APP_URL}top-headlines?q=${text}&country=pt&from=${today}&to=${today}&apiKey=${process.env.APP_KEY}&pageSize=100`);
//   const data = await response.json();
//   res.send(data)
// });

app.get('/api/franca', function (req, res) {

  const response = fetch(`${process.env.APP_URL}top-headlines?country=fr&from=${today}&to=${today}&apiKey=${process.env.APP_KEY}&pageSize=100`);
  response.then((res)=>{
    return res.json();
  }).then((json)=>{ 
    res.send(json)
  })
});

app.get('/api/top', function (req, res) {

  const response = fetch(`${process.env.APP_URL}top-headlines?country=pt&from=${today}&to=${today}&apiKey=${process.env.APP_KEY}&pageSize=100`);
  response.then((res)=>{
    return res.json();
  }).then((json)=>{ 
    res.send(json)
  })
});

app.get('/api/usa', function (req, res) {

  const response = fetch(`${process.env.APP_URL}top-headlines?country=us&from=${today}&to=${today}&apiKey=${process.env.APP_KEY}&pageSize=100`);
  response.then((res)=>{
    return res.json();
  }).then((json)=>{ 
    res.send(json)
  })
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
