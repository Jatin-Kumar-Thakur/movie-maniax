import React from 'react'
import './Footer.css';
import { Twitter,Linkedin,Facebook,Instagram } from 'lucide-react';
export default function Footer() {
  return (
    <div className='footer-main'>
      <div className="footer-container">
        <div className="footer-section1">
            <p>Terms of Use</p>
            <p>Primary-Policy</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
        </div>
        <div className="footer-section2">
            <p className="footer-note"><span>NOTE : </span>This is a Temprary Footer Theire is No working of this</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit eligendi, 
                debitis obcaecati, architecto fuga, deserunt amet perferendis nesciunt atque facere dolore! 
                Voluptas cumque, sequi animi inventore expedita quia. Beatae.</p>
        </div>
        <div className="footer-section3">
            <div className="footer-logo"><Twitter className="footer-logo"/></div>
            <div className="footer-logo"><Instagram /></div>
            <div className="footer-logo"><Facebook /></div>
            <div className="footer-logo"><Linkedin /></div>
        </div>
      </div>
    </div>
  )
}
