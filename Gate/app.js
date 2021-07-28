const express = require('express');
const https = require('https');
const fs = require('fs');

require('dotenv').config();

const dbService = require('./DbService');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const ejs = require('ejs');
const { connect } = require('http2');

//Templete Engine
app.set('view engine', 'ejs');

// Parsing Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
// Parse Application 
app.use(express.json());
//Static files
app.use(express.static('public'));

var options = {
    key: fs.readFileSync('./keys/key.pem', 'utf8'),
    cert: fs.readFileSync('./keys/server.crt', 'utf8')
};

app.set('port', port);

//Router
const routes = require('./server/routes/user');
app.use('/', routes);

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("https://localhost:" + port)
});


let users = [
    {
        id : 1,
        name : "A",
        temperature : 37.5
    },
    {
        id : 2,
        name : "B",
        temperature : 37.0
    },
    {
        id : 3,
        name : "C",
        temperature : 36.5
    }
]

app.get('/users', (req, res) => {
    return res.json(users[0]);
});

//create - id, name, time, temperature
app.post('/update', (req, res) => {

});

//read - temperature
app.get('/getData', (req, res) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getData();
    console.log(result);
    return result;
    
});

//update
