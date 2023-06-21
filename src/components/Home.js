import React from 'react'
import Navbar from './NavbarComponent.js'
import Carousel from './Carousel.js'
import Description from './HomeDescription.js'
import Newsletter from './Newsletter.js'
import Footer from './Footer.js'

import "../styles/index.css"

export default function Home() {
    return (
        <div>
            <Navbar fix="none"/>
            <Carousel />
            <Description />
            <Newsletter />
            <Footer />
        </div>
    )
}
