const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));

var options = {
    key: fs.readFileSync('./keys/key.pem', 'utf8'),
    cert: fs.readFileSync('./keys/server.crt', 'utf8')
};

const port = 3000;
app.set('port', port);

app.get('/', (req, res) => {
   res.render('index');
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});

