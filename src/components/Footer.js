import React from 'react';
import { FiFacebook } from"react-icons/fi";
import { BsFillEnvelopeFill } from"react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-image'>
            <img className="logo" src="./images/logo.png" alt="logo" />
        </div>
        <div>
        < BsFillEnvelopeFill />
      < FiFacebook />
      </div>
  
     </div>
    </>
  );
}

export default Footer