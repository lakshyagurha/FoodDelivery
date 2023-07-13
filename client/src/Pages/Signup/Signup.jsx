import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { message } from 'antd'
import { Link, useNavigate} from 'react-router-dom' 

export const Signup = () => {
    

    const [userData, setUserData] = useState({
        "Name": "",
        "Email":"",
        "Location": "",
        "Password": ""
      })
      const navigate = useNavigate();



    const inputHandler = (event)=>{
        setUserData({...userData, [event.target.name]: event.target.value})
        
    }

    const addUser = (event)=>{
        event.preventDefault();
        console.log("onsubmit called")


        axios.post('http://localhost:4000/signup', userData).then((res)=>{
            if(res.data.key === "UserAdded")
            {
              setUserData({
                "Name": "",
                "Email":"",
                "Location": "",
                "Password": ""
              })
              message.success(res.data.successMessage)
              navigate('/') 
              


            }
            else{
              message.error(res.data.errorMessage)

            }
            
        }).catch((error)=>{
            console.log(error)
        })
    }



  return (
    <>
      <div className="container">
    <div className="welcome">
        <div className="wel-head wel-common">
            <span className="highlight-span">GoodEats</span>
        </div>
        <div className="wel-foot wel-common">
            Your Mind Speaks what you<span className="highlight-span">Eat</span>
        </div>
    </div>
    <div className="form-box">
        <div className="card sign-card">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-8"><h5 className="card-title">Sign In</h5></div>
                    <div className="col-sm-4"><a href="/login" className="btn btn-outline-primary sign-log-btn">Log In</a></div>
                </div>
              <h6 className="card-subtitle mb-2 text-muted">Welcome to I-Notes</h6>
              <form onSubmit={addUser} >
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" name="Name" value={userData.Name} onChange={inputHandler} className="form-control  signup-input" />
                      <label className="form-label" to="form3Example1">Name</label>
                    </div>
                  </div>
                  <div className="col">
                  <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" onChange={inputHandler} value={userData.Email} name="Email" className="form-control signup-input" />
                  <label className="form-label" to="form3Example3">Email address</label>
                </div>
                  </div>
                </div>
              
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" onChange={inputHandler} value={userData.Location} name="Location" className="form-control signup-input" />
                  <label className="form-label" to="form3Example3">Location</label>
                  <button className='btn btn-success mx-2 my-2 '>Use Current Location</button>
                </div>
              
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" onChange={inputHandler} value={userData.Password} name="Password" className="form-control" />
                  <label className="form-label" to="form3Example4">Password</label>
                </div>
              
                <button type="submit" className="btn btn-primary btn-lg btn-block mb-4">Sign up</button>
              
                
               
              </form>


             
            </div>
          </div>

          

    </div>

</div>
    
    
    </>
  )
}
