import React from 'react';
import { useState } from "react";
import styles from './Signup.module.css'
import routes from '../Routes/routes.json'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')

const navigate = useNavigate()



  const signinHandler = () => {
 navigate('/login')
  }

  const signupHandler = () => {
    const name1 = name.trim(' ')
    const username1 = username.trim(' ')
    const password1 = password.trim(' ')
    const mobile1 = mobile.trim(' ')
    if (name1.length == 0) {
      alert('Enter Valid Name')
    } else if (username1.length == 0) {
      alert('Enter Valid Username')
    } else if (password1.length == 0) {
      alert('Enter Valid Password')
    } else if (mobile1.length != 10) {
      alert('Enter Valid 10 Digit Mobile Number')
    }
              
     setName('')
    setUserName('')
    setPassword('')
    setMobile('')
    
  }

  return (
  
    <div className="container">
      <br />
           <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase"> User Signup</h2>
                <div className="mb-3">
                 
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                      />
                    </div>
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
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">Mobile No.</label>
                      <input
                        type="number"
                        className="form-control"
                        maxLength="10"
                        id="mobile"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => {setMobile(e.target.value)}}
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary" onClick={signupHandler}>Create Account</button>
                    </div>
                 
                  <div className="mt-3 text-center">
                    <p className="mb-0">Already have an account?{' '}
                      <button className="btn btn-info" onClick={signinHandler}>Sign In</button>
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
export default Signup