const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const User = require('../models/user.model');
const fs = require('fs');
const path = require('path');


// File System Library
app.use(fileUpload());

//  Express Server upload files
app.put('/uploads/:user/:id', function(req, res) {

    let user = req.params.user
    let id = req.params.id

    if (!req.files) {
        return res.status(400)
            .json({
                ok: false,
                err: {
                    message: 'No files Uploaded'
                }
            });
    }

    let validTypes = ['user', 'assets'];
    if (validTypes.indexOf(user) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No user Found'
            }
        })
    }

    let archivo = req.files.archivo;
    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];
    // Extensiones Permitidas 
    let extensionesValidas = ['png', 'jpg'];
    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'The file extention is not valid, please use a ' + extensionesValidas.join('.') + 'file'
            }
        })
    }
    // Cambiar el nombre a los archivos

    let fileName = `${ id }-${new Date().getMilliseconds()}.${ extension }`

    archivo.mv(`uploads/${ user }/${fileName}`, (err) => {
        if (err)
            return res.status(500)
                .json({
                    ok: false,
                    err
                });

        userImg(id, res, fileName);
    });
});


function userImg(id, res, fileName) {
    User.findById(id, (err, userDB) => {
        if (err) {
            delFile(fileName, 'user');
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!userDB) {
            delFile(fileName, 'user');
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'User not found'
                }
            });
        }

        delFile(userDB.img, 'user');

        userDB.img = fileName;
        userDB.save((err, userSaved) => {
            res.json({
                ok: true,
                user: userSaved,
                img: fileName
            })
        });
    });
}


function delFile(fileName, user) {
    let pathImg = path.resolve(__dirname, `../../uploads/${ user }/${ fileName }`);
    if (fs.existsSync(pathImg)) {
        fs.unlinkSync(pathImg);
    }
}
module.exports = app;