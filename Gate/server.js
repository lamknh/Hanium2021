const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
var config = require("./config"); // config.js

const app = new express();
const ejs = require('ejs');
const { connect } = require('http2');
const { response } = require('express');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //middleware

var mysql = require("mysql");
var db = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

db.connect(function(err){
    if(err){ 
        throw err; 
    }else{
        console.log("db connected");
    }
});

db.query(`SELECT * FROM ENTRY_RECORD`, function(err, results){
  console.log(results);
})


var options = {
    key: fs.readFileSync('./keys/key.pem', 'utf8'),
    cert: fs.readFileSync('./keys/server.crt', 'utf8')
};

app.set('port', config.port);

app.get('/', (req, res) => {
   res.render('index');
});

var server = https.createServer(options, app);

server.listen(config.port, () => {
  console.log("https://localhost:" + config.port)
});