const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/goodeat')

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,

    },
    Date: {
        type: Date,
        default: Date.now
    }
})



const userData = mongoose.model('userData', userSchema);

module.exports = userData;



