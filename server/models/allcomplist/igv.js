// ### Import Libraries ##################################
const mongoose = require('mongoose');
//  Definir el Esquema de datos que se va a pedir 
let Schema = mongoose.Schema;
// Definir el Formato de la colección ~ Modelo

let allcompsIGVSchema = new Schema(
    [{
        symbol: String,
        logo: {
            url: String
        },
        CompanyInfo: {
            symbol: String,
            companyName: String,
            exchange: String,
            industry: String,
            website: String,
            description: String,
            securityName: String,
            issueType: String,
            sector: String,
            primarySicCode: String,
            employees: String,
            tags: Array,
            address: String,
            address2: String,
            state: String,
            city: String,
            zip: String,
            country: String,
            phone: String
        },
        AdjustedRsquared: String,
        BetaofBenchmark: String,
        SEofBenchmark: String,
        tRatio: String,
        Pvalue: String,
        SEofRegression: String,
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
let AllCompList = mongoose.model('igvallcomp', allcompsIGVSchema);
module.exports = AllCompList;