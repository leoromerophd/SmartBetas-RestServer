// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
// Definir el Formato de la colección ~ Modelo

let thechosenlistSOXXSchema = new Schema({
    TheChosenListSOXX: [{

        symbol: String,
        TheChosen: String,
        HpFcast: String,
        Scatters: String,
        Frec20: String,
        Frec50: String,
        Frec200: String,

    }]
});

//  crear el modelo para llegar a la colección 
// el valor entre '' define la conección en plural 'etfinfos'
let TheChosenListSOXX = mongoose.model('soxxthechosens', thechosenlistSOXXSchema);
module.exports = TheChosenListSOXX;