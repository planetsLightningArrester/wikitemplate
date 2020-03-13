var express = require('express');
const serverPort = 60000;
var app = express();
var http = require('http').createServer(app);
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/www/index.html");
});

http.listen(serverPort);

app.use('/', express.static(path.join(__dirname, 'www')));

console.log('Server running on http://localhost:60000');