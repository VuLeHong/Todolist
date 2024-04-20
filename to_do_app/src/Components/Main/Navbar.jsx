import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className='nav_container'>
        <div></div>
        <div className='nav_menu'>
            <a href='#' className='nav_link'>Home</a>
            <a href='#' className='nav_link'>About us</a>
            <a href='#' className='nav_link'>Contact Me</a>
        </div>
        <div className='btnbox'>
        <a href='/'><button className='btnPopup'>Log Out</button></a>
        <a><FaRegUser className='user_icon'/></a>
        </div>
            
    </div>
  )
}

export default Navbar