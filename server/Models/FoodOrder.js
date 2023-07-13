const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/goodeat')


const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        
     
    },
    order_data : {
        type: Array,
        
    }

})


const order = mongoose.model('Order_data', OrderSchema)

module.exports = order