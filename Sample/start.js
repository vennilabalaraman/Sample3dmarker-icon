var express = require('express');           // For web server
var Axios = require('axios');               // A Promised base http client
var bodyParser = require('body-parser');    // Receive JSON format
Axios.defaults.maxContentLength = Infinity;
Axios.defaults.maxBodyLength = Infinity;
// Set up Express web server
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

// This is for web server to start listening to port 3000
app.set('port', 3005);
var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + server.address().port);
});