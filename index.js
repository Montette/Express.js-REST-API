const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();
global.app = app;

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(bodyParser.json());


mongoose.connect(config.database, () => {
    console.log('connected to database');
});
const db = mongoose.connection;

app.set('superSecret', config.secret);
app.use(morgan('dev')); // log requests to the console


app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', apiRoutes);




const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server is running');
});

// module.exports = {
//     app
// }




