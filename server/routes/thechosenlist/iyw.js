//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListIYW = require('../../models/thechosenlist/iyw');

// GET The Chosen IYW list  
app.get('/thechosenlist/IYW', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListIYW.find({}, 'TheChosenList')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListIYW) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListIYW
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;