// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
// Definir el Formato de la colección ~ Modelo 
let todayearningsSchema = new Schema({
    symbol: String,
    earnings: [{
        actualEPS: Number,
        consensusEPS: Number,
        announceTime: String,
        numberOfEstimates: Number,
        EPSSurpriseDollar: Number,
        EPSReportDate: String,
        fiscalPeriod: String,
        fiscalEndDate: String,
        yearAgo: Number,
        yearAgoChangePercent: Number,
        currency: String
    }]
});

//  crear el modelo para llegar a la colección 
// el valor entre '' define la conección en plural 'etfinfos'
let TodaysEarnings = mongoose.model('todayearning', todayearningsSchema);
module.exports = TodaysEarnings;