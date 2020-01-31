//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListIYE = require('../../models/thechosenlist/iye');

// GET The Chosen IYE list  
app.get('/thechosenlist/IYE', verifyToken, (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListIYE.find({}, 'TheChosenList')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListIYE) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListIYE
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;