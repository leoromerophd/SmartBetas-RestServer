// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
let etfinfoSchema = new Schema({
    Symbol: String,
    productID: String,
    ShortName: String,
    longName: String,
    description: String,
    url: String,
    SmartBetaList: String,
    String,
    componentsURL: String,
});
//  crear el modelo para leer la colección en Mongo 
// el valor entre '' define la colección en plural 'infoets'en la BBDD
let ETFinfo = mongoose.model('infoetf', etfinfoSchema);
module.exports = ETFinfo;