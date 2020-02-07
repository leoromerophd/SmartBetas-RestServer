//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListIBB = require('../../models/thechosenlist/ibb');

// GET The Chosen IBB list  
app.get('/thechosenlist/IBB', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListIBB.find({}, 'TheChosenList')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListIBB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListIBB
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;