//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenList = require('../../models/thechosenlist/igv');

// GET The Chosen IGV list  
app.get('/thechosenlist/IGV', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 100;
    limit = Number(limit);

    TheChosenList.find({}, 'symbol logo CompanyInfo PriceTarget SocialSentiment HpFcast Scatters Frec20 Frec50 Frec200')
        .skip(page)
        .limit(limit)
        .exec((err, TheChosenList) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TheChosenList
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;