import React from 'react'
import Navbar from './NavbarComponent.js'
import Carousel from './Carousel.js'
import Description from './HomeDescription.js'
import Newsletter from './Newsletter.js'
import Footer from './Footer.js'



export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Description />
            <Newsletter />
            <Footer />
        </div>
    )
}
