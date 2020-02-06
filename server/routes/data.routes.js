//#####  Importar Liberías ###################
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const app = express();
// ####### Import  Middlewares 
const { verifyToken, verifyAdmin_Role } = require('../middlewares/auth')
    // # Import Schema Models #######################
const ETFinfo = require('../models/etfinfo.model');
const TodaysEarnings = require('../models/todaysearnings.model');
const TheChosenListIAK = require('../models/thechosenlist/iak');

// GET to Get ETF info data 
app.get('/etfinfo', function(req, res) {
    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4
    limit = Number(limit);

    ETFinfo.find({}, 'symbol name SmartBetaList TradedSince SharesOutstanding Description FirstComponentName FirstComponentWeight FirstComponentSymbol SecondComponentName SecondComponentWeight SecondComponentSymbol ThirdComponentName ThirdComponentWeight ThirdComponentSymbol FourthComponentName FourthComponentWeight FourthComponentSymbol FifthComponentName FifthComponentWeight FifthComponentSymbol')
        .skip(page)
        .limit(limit)
        .exec((err, ETFinfo) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                ETFinfo
            });
        });
});

// GET Todays Earnings data 
app.get('/earningstoday', function(req, res) {
    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4
    limit = Number(limit);

    TodaysEarnings.find({}, 'symbol logo earnings')
        .skip(page)
        .limit(limit)
        .exec((err, TodaysEarnings) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                TodaysEarnings
            });
        });
});


// GET The Chosen All Data 
app.get('/thechosen', verifyToken, function(req, res) {
    let page = req.query.page || 0;
    page = Number(page);
    let limit = req.query.limit || 4
    limit = Number(limit);

    Thechosen.find({}, 'stocks')
        .skip(page)
        .limit(limit)
        .exec((err, Thechosen) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                Thechosen
            });
        });
});

//  ### Exportar el app de Express ##############
module.exports = app;