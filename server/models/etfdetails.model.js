// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
let etfdetailsSchema = new Schema({

    symbol: String,
    name: String,
    TradedSince: String,
    TotalAssets: String,
    SharesOutstanding: String,
    FirstComponentName: String,
    FirstComponentWeight: String,
    FirstComponentSymbol: String,
    SecondComponentName: String,
    SecondComponentWeight: String,
    SecondComponentSymbol: String,
    ThirdComponentName: String,
    ThirdComponentWeight: String,
    ThirdComponentSymbol: String,
    FourthComponentName: String,
    FourthComponentWeight: String,
    FourthComponentSymbol: String,
    FifthComponentName: String,
    FifthComponentWeight: String,
    FifthComponentSymbol: String

});
//  crear el modelo para llegar a la colección 
// el valor entre '' define la conección en plural 'etfinfos'
let ETFdetails = mongoose.model('etfdetail', etfdetailsSchema);
module.exports = ETFdetails;