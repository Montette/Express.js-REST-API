const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) { //custom method of Contact model. Find() is an API method, which get for arguments, one of them is the callback in which we have access to error object and retreiving data
    Contact.find(callback).limit(limit);
}
