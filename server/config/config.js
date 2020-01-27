// ################################
//  Port Configuration 
// ################################
process.env.PORT = process.env.PORT || 3000;

// ################################
//  Entorno 
// ################################

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ################################
//  BBDD 
// ################################

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/SmartBetas'
} else {
    urlDB = 'mongodb+srv://leoromero:BolonYcol4ever@leoromeromdb-vztlw.mongodb.net/SmartBetas'
}

process.env.URLDB = urlDB;