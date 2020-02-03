//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// # Import Schema Models #######################
const User = require('../models/user.model');
const { verifyToken, verifyAdmin_Role } = require('../middlewares/auth')
    // #####################################################
    // #######  Definir las Rutas de la Aplicación #########
    // #####################################################

// Get All Users 

app.get('/usuarios', verifyToken, (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 5
    limit = Number(limit);
    User.find({}, 'name email')
        .skip(page)
        .limit(limit)
        .exec((err, usersDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                usersDB
            });
        });
});

// POST to Auth User by email and create a new user 
app.post('/user/signin', (req, res) => {
    // receives data from user POST
    let body = req.body;
    // Define user from Schema  
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        estado: body.estado
    })

    // Save user in database using Moongose methods 
    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        })
    });
});

// PUT to update user info 
app.put('/user/:id', [verifyToken, verifyAdmin_Role], (req, res) => {
    let id = req.params.id;
    // usa el paquete underscore _ para definir sólo los campos a modificar
    let body = _.pick(req.body, ['name', 'email', 'img', 'estado']);
    // Encuentra en la BBDD y manda nuevo valor (new:true a la respuesta)
    //  run validators corre las condiciones especificadas en el esquema
    User.findByIdAndUpdate(id, body, { new: true }, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        })
    })
});

app.delete('/user/:id', [verifyToken, verifyAdmin_Role], (req, res) => {
    let id = req.params.id;
    let cambiaEstado = {
        estado: false
    }
    User.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No user found'
                }
            });
        }
        res.json({
            ok: true,
            user: usuarioBorrado
        });
    });
});



//  ### Exportar el app de Express ##############
module.exports = app;