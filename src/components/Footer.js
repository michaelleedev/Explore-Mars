import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter} from 'react-icons/ci'
import { FaTiktok} from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      
      <div className="socials-container">
        <a href="/" onClick={() => alert("Redirecting to Facebook")}><CiFacebook /></a>
        <a href="/" onClick={() => alert("Redirecting to Instagram")}><CiInstagram /></a>
        <a href="/" onClick={() => alert("Redirecting to Tiktok")}><FaTiktok /></a>
        <a href="/" onClick={() => alert("Redirecting to Twitter")}><CiTwitter /></a>
      </div>
    </div>
  )
}
