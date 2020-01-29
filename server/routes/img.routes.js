const express = require('express');
const fs = require('fs');
const path = require('path');
let app = express();
const { verifyTokenImg } = require('../middlewares/auth')


app.get('/img/:type/:etf/:img', verifyTokenImg, (req, res) => {

    let type = req.params.type;
    let etf = req.params.etf
    let img = req.params.img
    let pathImage = path.resolve(__dirname, `../../img/${type}/${etf}/${img}`)

    if (fs.existsSync(pathImage)) {
        res.sendFile(pathImage);
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
        res.sendFile(noImagePath)
    }
});

module.exports = app;