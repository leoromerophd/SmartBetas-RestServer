//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListIYJ = require('../../models/thechosenlist/iyj');

// GET The Chosen IYJ list  
app.get('/thechosenlist/IYJ', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListIYJ.find({}, 'symbol HpFcast Scatters Frec20 Frec50 Frec200')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListIYJ) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListIYJ
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;