import React, { useState } from 'react'
import './Login_Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/signup', {name, email, password})
      .then(result => {console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='pos-box'>
          <div className='box'>
            <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
              <div className='input-box'>
                <label for='name'>Your name</label>
                <input type='text' className='input-field' id='name' onChange={(e)=>{setName(e.target.value)}} required/>
              </div>
              <div className='input-box'>
                <label for='email'>E-mail</label>
                <input type='email' className='input-field' id='email' onChange={(e)=>{setEmail(e.target.value)}} required/>
              </div>
              <div className='input-box'>
                <label for='password'>Password</label>
                <input type='password' className='input-field' id='pass' onChange={(e)=>{setPassword(e.target.value)}} required/>
              </div>
              <div className='input-box'>
                <input type='submit' className='submitBtn' value="Create an account"/>
              </div>
              </form>
            
            <div className='bottom'>
              <span><a href='/'>Log In</a></span>
              <span><a href='#'>Forgot Password?</a></span>
            </div>
          </div>   
        <div className="wrapper"></div>
    </div>
  )
}

export default Signup