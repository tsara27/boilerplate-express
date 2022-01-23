var express = require('express');
var app = express();

app.get("/", function(req, res) {
  absolutePath = __dirname + "/views/index.html"
  res.sendFile(absolutePath);
});

 module.exports = app;
