//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenListIYF = require('../../models/thechosenlist/iyf');

// GET The Chosen IYF list  
app.get('/thechosenlist/IYF', verifyToken, (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenListIYF.find({}, 'TheChosenList')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenListIYF) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenListIYF
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;