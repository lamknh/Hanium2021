const express = require('express');
const router =  express.Router();

const DbService = require('../../DbService');
const userController = require('../controllers/userController');

let result;

router.get('/', (req, res, next) => {
    res.render('index');
 });

 
let users = [
    {
        id : 0,
        name : "A",
        temperature : 37.5
    },
    {
        id : 1,
        name : "B",
        temperature : 37.0
    },
    {
        id : 2,
        name : "C",
        temperature : 36.5
    }
]

router.get('/users', (req, res) => {
    return res.json(users);
});

router.get('/users/:id', (req, res) => {
    result = users.find(u => u.id === parseInt(req.params.id));
    if (!users) res.status(404).send(`ID was not found`);
    res.send(result);
    return result;
});

//read - temperature
router.get('/getData', async (req, res, next) => {
    try{
        result = await DbService.all();
        res.json(result);
        console.log(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    return result;
});

router.get('/user/:id', async (req, res, next) => {
    try{
        result = await DbService.one(req.params.id); //url 파라미터 정보 조회
        //console.log(req.params.id);
        res.json(result);
        console.log(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    return result;
});

router.get('/temp/:id', async (req, res, next) => {
    try{
        result = await DbService.tem(req.params.id); //url 파라미터 정보 조회
        //console.log(req.params.id);
        res.json(result);
        console.log(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
    return result;
})

//create - id, name, time, temperature
router.post('/post/:id/:name/:time/:temperature', (req, res) => {
    
});

 module.exports = router;