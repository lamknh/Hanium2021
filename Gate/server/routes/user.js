const express = require('express');
const router =  express.Router();

const dbService = require('../../DbService');
const userController = require('../controllers/userController');

router.get('', (req, res) => {
    res.render('index');
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

router.get('/users', (req, res) => {
    return res.json(users[0]);
});

//create - id, name, time, temperature
router.post('/update', (req, res) => {

});

//read - temperature
router.get('/getData', (req, res) => {
    const db = dbService.getDbServiceInstance();
    const result = db.getData();
    console.log(result);
    return result;
    
});

//update


 module.exports = router;