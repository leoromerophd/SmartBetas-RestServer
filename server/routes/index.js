const expess = require('express');
const app = expess();


app.use(require('./data.routes'));
app.use(require('./login.routes'));
app.use(require('./user.routes'));


module.exports = app;