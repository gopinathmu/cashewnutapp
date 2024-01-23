import React, { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://img.freepik.com/free-photo/raw-cashews-nuts-bag-dark-background_1150-45358.jpg',
    'https://i0.wp.com/www.rawcashewnuts.com/wp-content/uploads/2020/09/cashew-nuts-kernels.jpg?fit=820%2C450&ssl=1',
    'https://images.unsplash.com/photo-1627820752174-acae1b399128?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzaGV3JTIwbnV0fGVufDB8fDB8fHww'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className='image'/>
        </div>
      ))}
    </div>
  );
};

export default Slider;
