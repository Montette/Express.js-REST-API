const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: String,
    password: String,
    email: String,
    admin: Boolean
});

module.exports = mongoose.model('user', userSchema);