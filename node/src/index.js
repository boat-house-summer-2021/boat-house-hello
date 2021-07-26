var express = require('express');
var os = require('os');
var app = express();

// C4 - change in master
// C5 - change in feature1
app.get('/', function (req, res) {
  //  - upgrade to v2 in feature1
  console.log('Hello Boathouse v3 from ... %s', os.hostname );
  res.send('Hello Boathouse v3 ... '+ os.hostname);  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  //C9 - change in featrue1
  console.log('Example app listening at http://%s:%s', host, port);
});