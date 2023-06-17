import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter} from 'react-icons/ci'
import { FaTiktok} from 'react-icons/fa'

import '../styles/index.css';

export default function Footer() {
  return (
    <div>
      
      <div className="socials-container">
        <a href="#" ><CiFacebook /></a>
        <a href="#" ><CiInstagram /></a>
        <a href="#" ><FaTiktok /></a>
        <a href="#" ><CiTwitter /></a>
        
      </div>
        
    </div>
  )
}
