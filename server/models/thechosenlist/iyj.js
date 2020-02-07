// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
// Definir el Formato de la colección ~ Modelo

let thechosenlistIYJSchema = new Schema(

    [{
        symbol: String,
        TheChosen: String,
        HpFcast: String,
        Scatters: String,
        Frec20: String,
        Frec50: String,
        Frec200: String,
    }]
);

//  crear el modelo para llegar a la colección 
// el valor entre '' define la conección en plural 'etfinfos'
let TheChosenList = mongoose.model('IYJthechosens', thechosenlistIYJSchema);
module.exports = TheChosenList;