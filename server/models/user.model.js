// ### Import Libraries ##################################
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// #### Define admin Roles ########################
let validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid role'
};
// ### Create Model Schemas  #############################
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Mail is mandatory']
    },
    password: {
        type: String,
        required: [true, 'Please define a password']
    },
    img: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    }
});

// Method to do not return user-password in the response
userSchema.methods.toJSON = function() {
    let userData = this;
    let userObject = userData.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.plugin(uniqueValidator, { message: '{PATH} most be unique' });
module.exports = mongoose.model('Usuario', userSchema);