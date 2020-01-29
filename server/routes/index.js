const expess = require('express');
const app = expess();


app.use(require('./data.routes'));
app.use(require('./login.routes'));
app.use(require('./user.routes'));
app.use(require('./img.routes'));
app.use(require('./uploads'));


module.exports = app;