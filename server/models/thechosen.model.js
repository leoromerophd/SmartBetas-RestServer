// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
let thechosenSchema = new Schema({
    stocks: [{
        ratingSell: String,
        PositiveSentiment: String,
        totalScoresSentiment: String,
        sVARfcast: String,
        PercentChange: String,
        PrevClose: String,
        symbol: String,
        Low: String,
        Scatters: String,
        ratingBuy: String,
        Freqc50: String,
        numberOfAnalysts: String,
        Close: String,
        Open: String,
        PriceTargetLow: String,
        logo: String,
        Sector: String,
        SotialSentiment: String,
        High: String,
        PriceTarget: String,
        ratingHoldMark: String,
        PriceTargetHigh: String,
        Freqc200: String,
        ratingOverweight: String,
        reportDate: String,
        Name: String,
        ratingNone: String,
        Freqc20: String,
        NegativeSentiment: String,
        HpFcast: String,
        rating: String,
        rating_ENDMARK: String
    }]
});
//  crear el modelo para llegar a la colección 
// el valor entre '' define la conección en plural 'etfinfos'
let Thechosen = mongoose.model('thechosen', thechosenSchema);
module.exports = Thechosen;