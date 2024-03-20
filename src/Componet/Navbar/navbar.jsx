import React from 'react'
import { Link } from "react-scroll";

import './navbar.css'
function navbar() {
  return (
    <nav>
      <div className="logo">
      <h3>REACT LANDING PAGE</h3>

      </div>
      <div className="pages">
        <ul className='ul'>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200}   to="feature">FEATURE</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="about">ABOUT</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="services">SERVICES</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="gallery">GALLERY</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="testimonails">TESTMONIALS</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="team">TEAM</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} duration={200} to="contact">CONTACT</Link></li>
         
        </ul>
      </div>
    </nav>
  )
}

export default navbar
