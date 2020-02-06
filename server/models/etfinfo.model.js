// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
let etfinfoSchema = new Schema({
    symbol: String,
    name: String,
    SmartBetaList: String,
    TradedSince: String,
    SharesOutstanding: String,
    Description: String,
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
//  crear el modelo para leer la colección en Mongo 
// el valor entre '' define la colección en plural 'infoets'en la BBDD
let ETFinfo = mongoose.model('infoetf', etfinfoSchema);
module.exports = ETFinfo;