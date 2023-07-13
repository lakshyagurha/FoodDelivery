import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import { Link} from 'react-router-dom'
import { message } from 'antd'

export const Login = () => {
  const [loginData, setLoginData] = useState({
    "Email": "",
    "Password": ""
  })


  const navigate = useNavigate();




  const inputhandler = (event)=>{
    setLoginData({...loginData, [event.target.name]: event.target.value})
  }
  
  const loginUser = (event)=>{
    event.preventDefault();
    
    axios.post("http://localhost:4000/loginUser", loginData).then((res)=>{
      if(res.data.key == false)
      {
        message.error(res.data.errorMessage)
      }
      else{
        message.success(res.data.successMessage)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem("yourEmail", res.data.userEmail);
        navigate('/');

      }
      
    }).catch((error)=>{
      console.log(error)
    });

  }
  return (
    <>
    
<div className="container Log-cont">
    
    <div className="row Log-row-row">
        <div className="col-sm-6 Log-row">
            <img  src='https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="I Notes Logo" className="rounded mx-auto d-block Log-logo "/>
        </div>
        <div className="col-sm-6 Log-row">

            <div className="card Log-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8">
                            <h5 className="card-title">Sign In</h5>

                        </div>
                        <div className="col-sm-4">
                            <Link to="/Signup" className="btn btn-outline-primary Log-links">Sign In</Link>
                        </div>
                    </div>
                  <h6 className="card-subtitle mb-2 text-muted">Welcome. If you are new Please Sign-In First</h6>

                  <div className="Log-inputs">
                    <form onSubmit={loginUser} >
                        <div className="form-group">
                          <label to="exampleInputEmail1 " className="Log-input-text">Email address</label>
                          <input type="email" name="Email" onChange={inputhandler} value={loginData.Email} className="form-control Log-input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-8">
                                    <label to="exampleInputPassword1" className="Log-input-text">Password</label>

                                </div>
                                <div className="col-sm-4">
                                    <a href="/" className="Log-links">Forgot?</a>
                                </div>
                            </div>
                          <input type="password" name="Password" onChange={inputhandler}  value={loginData.Password} className="form-control Log-input-field" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" to="exampleCheck1">Save Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block Log-sub-button">Submit</button>
                      </form>
                  </div>
                </div>
              </div>

        </div>
    </div>
</div>
    </>
  )
}
