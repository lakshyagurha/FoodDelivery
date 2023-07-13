const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/goodeat')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err, resp){
  console.log("server is connected successfully")
});

const dataSchema = mongoose.Schema({
    "CategoryName": {type: String},

    "name":{type: String},
    "img": {type: String},
    "options": {
        "half":{type: String},
        "full": {type: String}
    },
    "description": {type: String} 
})

const data = mongoose.model("goodeat", dataSchema);
module.exports = data


