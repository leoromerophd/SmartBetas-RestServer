//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const TheChosenList = require('../../models/thechosenlist/iyw');

// GET The Chosen IYW list  
app.get('/thechosenlist/IYW', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    TheChosenList.find({}, 'symbol logo url nextEarnings CompanyInfo symbol companyName exchange industry website description CEO securityName issueType sector primarySicCode employees tags address address2 state city zip country phone PriceTarget symbol updatedDate priceTargetAverage priceTargetHigh priceTargetLow numberOfAnalysts SocialSentiment TheChosen HpFcast Scatters Frec20 Frec50 Frec200 AdjustedRsquared BetaofBenchmark SEofRegression')
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