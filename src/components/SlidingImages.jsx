import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/sliding-images/1.jpeg';
import second from '../assets/sliding-images/2.jpg';
import third from '../assets/sliding-images/3.jpg';
import fourth from '../assets/sliding-images/4.jpg';

function SlidingImages() {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fourth}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SlidingImages;