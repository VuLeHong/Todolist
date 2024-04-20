import React, { useState } from 'react'
import './Login_Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login', {email, password})
    .then(result => {
      if(result.status === 200){
        localStorage.setItem("user", JSON.stringify(result.data))
        navigate('/Main')
      }
      else if(result.status === 202){
        console.log(result.status)
        alert("Wrong password")
      }
      else {
        console.log(result.status)
        alert("user does not exist")
      }
    })
    .catch(err => console.log(err))
}
  return (
  <div className='pos-box'>
          <div className='box'>
            <h2>Welcome to Workspace</h2>
            <form onSubmit={handleSubmit}>
            <div className='input-box'>
              <label for='email'>Email</label>
              <input type='email' className='input-field' id='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div className='input-box'>
              <label for='password'>Password</label>
              <input type='password' className='input-field' id='pass' onChange={(e)=>{setPassword(e.target.value)}}required/>
            </div>
            <div className='input-box'>
              <input type='submit' className='submitBtn' value="SIGN IN"/>
            </div>
            </form>
            <div className='bottom'>
              <span><a href='/signup'>Sign up</a></span>
              <span><a href='#'>Forgot Password?</a></span>
            </div>
            
            
          </div>   
        <div className="wrapper"></div>
    </div>
  )
}

export default Login