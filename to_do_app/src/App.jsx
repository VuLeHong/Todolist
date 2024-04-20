import { useState } from 'react'
import './App.css'
import Main from './Components/Main/Main'
import Login from './Components/Login_Signup/Login'
import Signup from './Components/Login_Signup/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Main' element={<Main/>}/>
        </Routes>
              
      </BrowserRouter>
    </div>
  )
}

export default App
