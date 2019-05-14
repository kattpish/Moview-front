var express = require('express');
var app = express();
var cors = require("cors");

app.use(express.json())
app.use(cors());

app.get('/tts/:word', function(req, res) {
  var api_url = 'https://naveropenapi.apigw.ntruss.com/voice/v1/tts';
  var request = require('request');
  var options = {
    url: api_url,
    form: { speaker: 'mijin', speed: '0', text: req.params.word },
    headers: { 'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret },
  };
  var _req = request.post(options).on('response', function(response) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']);
      });
  _req.pipe(res); // 브라우저로 
});

module.exports = app;