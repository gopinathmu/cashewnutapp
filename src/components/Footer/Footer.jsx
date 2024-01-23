import React from 'react';
import './Footer.css';
import { Element } from 'react-scroll';
import phpay from "../Assests/phpay.jpg"
import upi from "../Assests/upi.webp"
import visa from "../Assests/visa.png"


const Footer = () => {
  return (
    <Element name="footer">
      
      <footer>
        <div id='contact'>
          <div className='getInTouch'>
            <h2>Get In Touch</h2>
            <p>+91 75399 78367</p>
            <p>gopinjr8@gmail.com</p>
          </div>
          <div className='getInTouch'>
            <h2>We Accept</h2>
            <div className='payment'>
            <img src={visa} alt='' />
            <img src={upi} alt='' />
            <img src={phpay} alt='' />
            </div>
          </div>
          <div className='getInTouch'>
            <h2>Social</h2>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
       <h4>Copyright © the Nutify 2024. All rights deserved.</h4> 
     </footer>
      
    </Element>
  );
}

export default Footer;

