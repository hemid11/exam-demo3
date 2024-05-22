import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import './index.css'

const index = () => {
  return (
    <div className='footer'>
    <div>
    <Link to="/" className="foot">Blog</Link>
    <Link to="/" className="foot">FAQs</Link>
    <Link to="/" className="foot">Contact Us</Link>
    <p> &copy; ©2018 All Rights Reserverd. This template is made with  by Colorlib.</p>
    </div>
    <div className='web'>
    <div style={{marginLeft:'20px'}}><FaFacebookF /></div>
    <div style={{marginLeft:'20px'}}><FaTwitter /></div>
    <div style={{marginLeft:'20px'}}><FaInstagram /></div>
    <div style={{marginLeft:'20px'}}><FaSkype /></div>
    <div style={{marginLeft:'20px'}}><FaPinterestP /></div>
    
    </div>
    
    </div>
  )
}

export default index