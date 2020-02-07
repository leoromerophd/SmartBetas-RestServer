//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListSOXX = require('../../models/thechosenlist/soxx');

// GET The Chosen SOXX list  
app.get('/thechosenlist/SOXX', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListSOXX.find({}, 'symbol HpFcast Scatters Frec20 Frec50 Frec200')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListSOXX) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListSOXX
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;