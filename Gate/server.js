const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

var mysql = require("mysql");
var db = mysql.createConnection({
    host: "database-1.cmncqrwff0ap.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "asdf1234",
    database: "HANIUM1"
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


const app = new express();
const ejs = require('ejs');
const { connect } = require('http2');
const { response } = require('express');
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
  console.log("https://localhost:" + port)
});