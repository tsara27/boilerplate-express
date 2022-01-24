var dotenv = require("dotenv");
dotenv.config();

var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use("/", function(req, res, next) {
  console.log(req.method + " " + req.path + " " + " - " + req.ip);
  next();
});

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({
    time: req.time
  });
});

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

app.get("/:word/echo", function(req, res) {
  res.json({
    echo: req.params.word
  })
});

 module.exports = app;
