import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../images/carousel.jpg";
import Image2 from "../../images/carousel-2.jpg";
import Image3 from "../../images/carousel-3.jpg";

function HomeCarousel() {
    return <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Image2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
};

export default HomeCarousel;