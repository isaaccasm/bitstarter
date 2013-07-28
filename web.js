var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
app.get('/', function(request, response) {
  //var text = new buffer(24);
    var text = fs.readFileSync('index.html');
  response.send(text.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
