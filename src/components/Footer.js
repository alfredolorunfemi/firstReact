import React from 'react';
import { FaFacebookF } from"react-icons/fa";
import { BsFillEnvelopeFill } from"react-icons/bs";
import { AiFillInstagram } from"react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-image'>
            <img className="logo" src="./images/logo.png" alt="logo" />
            <div className='icons'>
        {/* < BsFillEnvelopeFill />
      < FaFacebookF />
      <AiFillInstagram /> */}
      </div>
        </div>
    
     </div>
     
    </>
  );
}

export default Footer