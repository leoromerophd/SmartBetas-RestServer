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
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ################################
//  Token Expiration 
// ################################

process.env.CADUCIDAD_TOKEN = '30d';

// ################################
//  Semilla de Autenticación 
// ################################

process.env.SEED = process.env.SEED || 'esta-es-la-semilla-de-desarrollo'