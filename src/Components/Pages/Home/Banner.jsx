import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide2 from "../../../assets/slide-1.jpg";
import slide3 from "../../../assets/slide-2.jpg";
import slide1 from "../../../assets/car-rentals-1.jpg";
import slide4 from "../../../assets/slide4.png";
import slide5 from "../../../assets/slide5.jpg";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      id: 1,
      image: slide1,
      heading: "Drive Your Dreams Today!",
      buttonText: "View Available Cars",
      link: "/availableCars",
    },
    {
      id: 2,
      image: slide2,
      heading: "Your Next Adventure Awaits!",
      buttonText: "Explore Our Fleet",
      link: "/availableCars",
    },
    {
      id: 3,
      image: slide3,
      heading: "Luxury Cars, Affordable Prices",
      buttonText: "Find Your Ride",
      link: "/availableCars",
    },
    {
      id: 4,
      image: slide4,
      heading: "Travel in Comfort and Style",
      buttonText: "Book Now",
      link: "/availableCars",
    },
    {
      id: 5,
      image: slide5,
      heading: "Experience the Best Rides",
      buttonText: "Start Your Journey",
      link: "/availableCars",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 


    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slide */}
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out transform">
        <div className="w-full flex items-center justify-center">
          <motion.img
            src={carouselData[currentIndex].image}
            alt={carouselData[currentIndex].heading}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute text-center text-white bg-black bg-opacity-50 p-4 md:p-8 rounded-lg shadow-lg max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
            <motion.h1
              className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 2 }}
            >
              {carouselData[currentIndex].heading}
            </motion.h1>
            <motion.button
              className="bg-green-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-sm md:text-lg hover:bg-green-600 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onClick={() => (window.location.href = carouselData[currentIndex].link)}
            >
              {carouselData[currentIndex].buttonText}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <div className="absolute inset-y-0 left-2 flex items-center md:left-4 lg:left-8">
        <button
          className="p-2 md:p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
          onClick={prevSlide}
        >
          <FaArrowLeft size={16} className="md:size-4" />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute inset-y-0 right-2 flex items-center md:right-4 lg:right-8">
        <button
          className="p-2 md:p-4 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
          onClick={nextSlide}
        >
          <FaArrowRight size={16} className="md:size-4" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
