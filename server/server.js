// #########  Static Variables ###################
require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// ###############################################
// MiddleWare to receive data from User Payloads
// to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // to parse application/json
app.use(bodyParser.json())
    // ###############################################

// POST to Auth User by email 
app.post('/user', function(req, res) {
    // receives data from user POST
    let body = req.body;
    // Require Authentication
    if (body.email === undefined) {
        res.status(400).json({
            ok: false,
            message: 'Authentication is required, please sing-in'
        });
    } else {
        res.json({ user: body })
    }
})

// GET to Get User Route 
app.get('/user', function(req, res) {
    res.json('getUser')
})

// Initial Route 
app.get('/', function(req, res) {
    res.json('Hello World')
})

//  ########## Turn Server On ####################
app.listen(process.env.PORT, () => {
        console.log('listening server in port: 3000');
    })
    // ##############################################