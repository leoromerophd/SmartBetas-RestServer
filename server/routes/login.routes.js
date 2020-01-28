//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
// # Import Schema Models #######################
const User = require('../models/user.model');


app.post('/login', (req, res) => {
    let body = req.body;
    User.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'User or password are wrong'
                }
            });
        }
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'user or Password are wrong'
                }
            });
        }
        let token = jwt.sign({
            user: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        res.json({
            ok: true,
            user: usuarioDB,
            token
        });
    });
});


module.exports = app;