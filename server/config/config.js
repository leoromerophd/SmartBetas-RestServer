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

// ################################
//  Google Client ID
// ################################
process.env.CLIENT_ID = process.env.CLIENT_ID || '54090601558-h1ulb6hkogm791ub04mnp6cm9m7s8o68.apps.googleusercontent.com'