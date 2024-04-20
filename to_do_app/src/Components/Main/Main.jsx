import { useState } from 'react'
import './Main.css'
import Home from './Pages/Home/Home'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function Main() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default Main