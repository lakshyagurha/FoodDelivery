const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/goodeat')


const catSchema = mongoose.Schema({
    "CategoryName": {type : String}

})

const caty = mongoose.model('categorys', catSchema);
module.exports = caty