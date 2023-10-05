import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Uname} from '../../Reducers/UserSlice'
import { useDispatch } from 'react-redux';
const Login =  () =>{

const navigate = useNavigate()

const dispatch = useDispatch()

   const [username, setUserName] = useState('')
  const [password, setPassword] = useState('') 

  const signupHandler = ()=>{
  navigate('/signup')
  }
const siginpHandler = ()=>{
    
    const username1 = username.trim(' ')
    const password1 = password.trim(' ')
    
     if (username1.length == 0) {
      alert('Enter Valid Username')
    } else if (password1.length == 0) {
      alert('Enter Valid Password')
    } 
          axios.post('http://localhost:8080/user/login', {
            username: `${username1}`,
      password: `${password1}`,
          }).then((data)=>{
            dispatch(Uname(username1))
           alert(data.data.message)
      navigate('/login')
    }).catch((error)=>{
      console.log(error)
    })       
    setUserName('')
    setPassword('')
    

}
  
  return (

     <div className="container">
      <br />
            <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase"> User Signin</h2>
                <div className="mb-3">
                 
                    
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => {setUserName(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                     
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                      />
                    </div>
                  
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={siginpHandler}>Sign In</button>
                    </div>
                 
                  <div className="mt-3 text-center">
                    <p className="mb-0">Create New account?{' '}
                      <button className="btn btn-info" onClick={signupHandler}>Signup</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;