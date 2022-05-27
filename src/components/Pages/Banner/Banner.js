import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}} 
      src="https://i.ibb.co/fHDq3MS/istockphoto-488844774-612x612.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/QvXTWTv/1908-i211-020-car-parts-frame-realistic.jpg"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"  style={{width: '100vw', height: '100vh'}}
      src="https://i.ibb.co/H25Cf5S/13027.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;