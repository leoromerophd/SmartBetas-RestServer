//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const AllCompList = require('../../models/allcomplist/ita');

// GET The Chosen ITA list  
app.get('/allcomplist/ita', (req, res) => {


    AllCompList.find({}, 'symbol logo url CompanyInfo companyName exchange industry website description CEO securityName issueType sector primarySicCode employees tags address address2 state city zip country phone PriceTarget HpFcast Scatters Frec20 Frec50 Frec200 AdjustedRsquared BetaofBenchmark SEofBenchmark tRatio Pvalue SEofRegression')
        .exec((err, AllCompList) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                AllCompList
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;