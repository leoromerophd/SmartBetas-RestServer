const expess = require('express');
const app = expess();


app.use(require('./data.routes'));
app.use(require('./login.routes'));
app.use(require('./user.routes'));
app.use(require('./img.routes'));
app.use(require('./uploads'));

app.use(require('./thechosenlist/ibb'));
app.use(require('./thechosenlist/igv'));
app.use(require('./thechosenlist/ita'));
app.use(require('./thechosenlist/ivw'));
app.use(require('./thechosenlist/iye'));
app.use(require('./thechosenlist/iyf'));
app.use(require('./thechosenlist/iyw'));
app.use(require('./thechosenlist/iyh'));
app.use(require('./thechosenlist/iyt'));
app.use(require('./thechosenlist/iyj'));
app.use(require('./thechosenlist/soxx'));
app.use(require('./thechosenlist/mutm'));

app.use(require('./allcomplist/soxx'));
app.use(require('./allcomplist/igv'));
app.use(require('./allcomplist/ita'));
app.use(require('./allcomplist/ivw'));
app.use(require('./allcomplist/iye'));
app.use(require('./allcomplist/iyf'));

module.exports = app;