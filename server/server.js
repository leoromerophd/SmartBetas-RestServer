// #########  Static Variables ###################
require('./config/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
// ###############################################
// MiddleWares to receive data from User Payloads
// to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // to parse application/json
app.use(bodyParser.json());

// App Routes #################################### 
app.use(require('./routes/index'));

// Habilitar la carpeta 'Public' #################
app.use(express.static(path.resolve(__dirname, '../public')));

// ########## Connenct to Database ################
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
    (err, res) => {
        if (err) {
            let db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error to the database:'));
        };
        console.log('Base de Datos ONLINE');
    });
// ############# Turn Express Server - On - #######
app.listen(process.env.PORT, () => {
    console.log('listening server in port: 3000');
});
// ##############################################