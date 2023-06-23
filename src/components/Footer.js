import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>

      <div className="socials-container">
        <a href={window.location.href} onClick={() => alert("Redirecting to Facebook")}><CiFacebook /></a>
        <a href={window.location.href} onClick={() => alert("Redirecting to Instagram")}><CiInstagram /></a>
        <a href={window.location.href} onClick={() => alert("Redirecting to Tiktok")}><FaTiktok /></a>
        <a href={window.location.href} onClick={() => alert("Redirecting to Twitter")}><CiTwitter /></a>
        <div className="disclaimer-container">
          <p>This website is a mock website with no real functionality. The Mars tourism information seen is 
            mostly fiction and is an imagination of how a tourism website to Mars would look like in the near future.
            No product or company mentioned in this website exists.
          </p>
        </div>
      </div>

    </div>
  )
}
