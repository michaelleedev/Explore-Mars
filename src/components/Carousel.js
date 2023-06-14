import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {FaAngleDoubleDown} from 'react-icons/fa'



// carousel image imports
import img1 from '../images/CarouselItem1.jpg'
import img2 from '../images/CarouselItem2.jpg'
import img3 from '../images/CarouselItem3.jpg'

// stylesheet
import '../styles/carousel.css'

export default function CarouselComponent() {
  return (
    <div>
        <Carousel fade controls={false} indicators={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img1}
                alt="first slide"
                />
                <Carousel.Caption>
                    <h1>EXPLORE MARS</h1>
                    <h3>Your experience of a lifetime starts here</h3>
                    <div className="icon"><FaAngleDoubleDown /></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img2}
                alt="second slide"
                />
                <Carousel.Caption>
                    <h1>EXPLORE MARS</h1>
                    <h3>Your experience of a lifetime starts here</h3>
                    <div className="icon"><FaAngleDoubleDown /></div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={img3}
                alt="third slide"
                />
                <Carousel.Caption>
                    <h1>EXPLORE MARS</h1>
                    <h3>Your experience of a lifetime starts here</h3>
                    <div className="icon"><FaAngleDoubleDown /></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
