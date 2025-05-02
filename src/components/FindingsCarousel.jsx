import React, { useState } from 'react';
import '../styles/components/carousel.css';

const FindingsCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images.length) return <p>No images available.</p>;

  return (
    <div className="carousel">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-image"
      />
      <p className="carousel-caption">{images[currentIndex].alt}</p>
      {hasMultiple && (
        <div className="carousel-controls">
          <button onClick={prevSlide}>←</button>
          <span className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </span>
          <button onClick={nextSlide}>→</button>
        </div>
      )}
    </div>
  );
};

export default FindingsCarousel;