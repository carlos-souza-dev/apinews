const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api', function (req, res) {

    const response = fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ca1ce57fdd0f40a8ba1a88403a72a809`);
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
