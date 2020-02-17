//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../../middlewares/auth')
    // # Import Schema Models #######################
const AllCompList = require('../../models/allcomplist/ibb');

// GET The Chosen ibb list  
app.get('/allcomplist/ibb', (req, res) => {

    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4;
    limit = Number(limit);

    AllCompList.find({}, 'symbol logo url CompanyInfo companyName exchange industry website description CEO securityName issueType sector primarySicCode employees tags address address2 state city zip country phone PriceTarget HpFcast Scatters Frec20 Frec50 Frec200 AdjustedRsquared BetaofBenchmark SEofBenchmark tRatio Pvalue SEofRegression')
        .skip(page)
        .limit(limit)
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