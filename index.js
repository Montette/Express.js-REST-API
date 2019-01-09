const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://Monika:test123@ds253104.mlab.com:53104/contacts-rest-api', () => {
    console.log('connected to database');
});
const db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', apiRoutes);



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server is running');
})




