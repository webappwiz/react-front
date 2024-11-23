import React from 'react';
import './Footer.css';
import clock from '../assets/clock.png';
import ig from '../assets/ig.png';
import telgra from '../assets/telgra.png';
import cha from '../assets/cha.png';
import Ximg from '../assets/Ximg.png';
import wha from '../assets/wha.png';



function Footer() {
  return (
    <footer className="footer">
      <div className='section1'> <div className='info'><p>Email:webapp<br />wiz0@gmail.com</p>
      <p>Phone:+234 701312 0897</p> <p>Delta stste, Nigeria.</p></div>
      <div className='info2'><p><b>Navigation</b></p>
      <p>About Us</p> <p>Service</p> <p>Contact</p></div>
      <div className='infoic'> <li><a href='http://t.me/Webappwiz'>  <img src={telgra} className='socail'></img>Telgram</a></li>
      <li><a href='https://wa.me/message/B7QRUUPS4W4DN1'>  <img src={wha} className='socail'></img>Whatsapp</a></li>
      <li><a href='https://www.facebook.com/solomon.ogwu.5621?mibextid=ZbWKwL'>  <img src={cha} className='socail'></img>Facebook</a></li>
      <li><a href='https://x.com/solomonogwu361?t=mCIQdKnEYvX7ohXN-s9yJw&s=09'><img src={Ximg} className='socail'></img>X</a></li>
        <li><a href='#'>  <img src={ig} className='socail'></img>Instagram</a></li>
      </div>
      </div>
      <div className='section2'><p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p> </div>
    </footer>
  );
}

export default Footer;