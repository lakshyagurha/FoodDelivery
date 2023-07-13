const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')


const router = require('./Router/router')



dotenv.config();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())






app.use(cors())



app.use('/', router)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is started on port ${process.env.PORT} in ${process.env.NODE_MODE}`)
})