var dotenv = require("dotenv");
dotenv.config();

var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  absolutePath = __dirname + "/views/index.html"
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
  raw = "Hello json";
  message = (process.env.MESSAGE_STYLE == 'uppercase') ? raw.toUpperCase() : raw;

  res.json({
    message: message,
  });
});

 module.exports = app;
