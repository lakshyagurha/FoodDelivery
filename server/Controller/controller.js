const data = require("../Models/model");
const bcrypt = require("bcrypt");
const userData = require("../Models/SignupLogin");
const category = require("../Models/Category");
const new_Order_data = require('../Models/FoodOrder')
const jwt = require("jsonwebtoken");

const mainPageController = async (req, res) => {
  console.log("Slash has be called");
};

const getDataController = async (req, res) => {
  console.log("get data controller called");

  let food_category = await category.find({});
  let food_items = await data.find({});

  if (food_category && food_items) {
    res.status(201).send({
      successMessage: "record successfully retrived",
      foodCategory: food_category,
      foodItems: food_items,
      key: "success",
    });
  } else {
    res.status(201).send({
      errorMessage: "something went wrong please try again",
      key: "error",
    });
  }
};

const signupPageController = async (req, res) => {
  console.log("signup Page Controller has be called");
  console.log(req.body);
  const finduser = await userData.find({ Email: req.body.Email });

  if (finduser == 0) {
    bcrypt.hash(req.body.Password, 10, (hashError, hash) => {
      if (!hashError) {
        const signupData = new userData({
          Name: req.body.Name,
          Email: req.body.Email,
          Location: req.body.Location,
          Password: hash,
        });
        signupData.save(
          res.status(201).send({
            successMessage: `Welcome ${req.body.Name} .... Please Login`,
            key: "UserAdded",
          })
        );
      }
    });
  } else {
    res
      .status(201)
      .send({ errorMessage: "Email Allready exists", key: "error" });
  }
};

const loginPageController = async (req, res) => {
  console.log(req.body);


  const user = await userData.findOne({ Email: req.body.Email });
  if(user){
    console.log("success")
    const comparePass = await bcrypt.compare(req.body.Password, user.Password);
        if (comparePass) {
    
          console.log("password is compared successfully");
          const token = jwt.sign({ id: user._id }, process.env.SECREATE_KEY, {
            expiresIn: "10m",
          });
          let userEmail = req.body.Email
          res.status(201).send({
            successMessage: `welcome ${user.Name} `,
            token, userEmail,
            key: "success",
          });
        } else {
          res
            .status(201)
            .send({ errorMessage: "Incorrect Password", key: false });
  }
}
  else{
    res.status(201).send({errorMessage: "Email does not exists", key: false})
  }
};

const mainPagePostController = async (req, res) => {
  const findid = await userData.findOne({ _id: req.body.userid });
  if (findid == 0) {
    console.log("sorry id doesnot exits");
  } else {
    res
      .status(201)
      .send({ successMessage: "Successfully Logid in", key: true });
  }
};

const userOrderDataController = async (req,res)=>{
  let data = req.body.order_data;
  await data.splice(0,0,{Order_date: req.body.order_date})

  // if email is not exist in db then create : else : InsertMany();
  let userid = await new_Order_data.findOne({"email": req.body.Email})
  console.log(userid)
  if(userid === null){
    try{
      const newOrderData = new new_Order_data({
        email: req.body.Email,  
        order_data: [data]

      })
      newOrderData.save(
        res.status(201).send({value: "Order Placed Successfully", key: true })
      )
      

    }
    catch(error){
      console.log(error)
      res.status(201).send({value: "Please try again something went wrong" , key : false})
    }

  }

  else{

    try{
      await new_Order_data.findOneAndUpdate({email: req.body.Email},
            {$push: {order_data : data} }
        ).then((res)=>{
          res.status(201).send({key: true})
        })

    }
    catch(error){
      res.status(201).send({"error": error.message})

    }

    
  }
   


  


}

const myOrderDataController = async(req, res)=>{
  try{
    let myData = await new_Order_data.findOne({"email": req.body.email})
    res.status(201).send({orderData: myData, key: true})
  }catch(error){
    res.status(200).send({key:false})

  }




}

const myOrdersController = async (req, res)=>{
  try{
    let mydata = await new_Order_data.findOne({"email": req.body.email})
    console.log(mydata.order_data)
    console.log(mydata)
    res.status(201).send({orderdata: mydata})

  }catch(error){
    console.log( `Something went wrong error is ${error.message}`)
  }


}
module.exports = {
  mainPageController,
  signupPageController,
  loginPageController,
  mainPagePostController,
  getDataController,
  userOrderDataController,
  myOrderDataController,
  myOrdersController
};
