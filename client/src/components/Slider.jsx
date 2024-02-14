import photo1 from './../assets/photo-1486825586573-7131f7991bdd.jpg'
import photo2 from './../assets/hal-gatewood-OgvqXGL7XO4-unsplash.jpg'
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Slider = () => {
  const images = [
    photo2,
    photo1,
    photo2,
    photo1,
    photo2
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        if (!isPaused) {
          showSlide(currentIndex + 1);
        }
      }, 1500); // Adjust the interval as needed (3000 milliseconds = 3 seconds)
    };

    startAutoSlide();

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, isPaused]);

  const showSlide = (index) => {
    setCurrentIndex((prevIndex) => {
      if (index < 0) {
        return images.length - 1;
      } else if (index >= images.length) {
        return 0;
      }
      return index;
    });
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-4/5 h-96 md:h-96"
      data-carousel="slide"
      onMouseEnter={handlePause}
      onMouseLeave={handlePause}
    >
      <div className="relative overflow-hidden rounded-lg md:h-full">
        {images.map((url, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`} data-carousel-item>
            <img src={url} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-300'}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => showSlide(index)}
          ></button>
        ))}
      </div>

      <button type="button" className="absolute top-0 h-full start-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" className="absolute h-full top-0 end-0 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-1 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
