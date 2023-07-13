const express = require("express");
const router = express.Router();
const {mainPageController, signupPageController, loginPageController, mainPagePostController, getDataController, userOrderDataController, myOrderDataController, myOrdersController} = require('../Controller/controller')
const middleware = require('../MiddleWare/middleware')




router.post('/signup', signupPageController)

router.post('/loginUser', loginPageController)

router.post('/', middleware, mainPagePostController);
router.get('/getData', getDataController);

router.post('/orderData', userOrderDataController)

router.post('/myOrderData', myOrderDataController)
router.post('/myorders', myOrdersController)






module.exports = router

 