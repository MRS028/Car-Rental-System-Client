import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slide1 from "../../../assets/car-rentals-1.jpg";
import slide2 from "../../../assets/slide-1.jpg";
import slide3 from "../../../assets/slide-2.jpg";
import slide4 from "../../../assets/slide-4.jpg";
import slide5 from "../../../assets/slide3.jpg";

const Banner = () => {
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

  return (
    <div className="relative  w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showIndicators={true}
        useKeyboardArrows
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
              onClick={onClickHandler}
            >
              <FaArrowLeft size={20} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
              onClick={onClickHandler}
            >
              <FaArrowRight size={20} />
            </button>
          )
        }
      >
        {carouselData.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full  object-top lg:object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center text-white">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>
              <button
                className="bg-green-500 px-6 py-3 text-sm md:text-lg rounded-lg hover:bg-green-600 transition"
                onClick={() => (window.location.href = slide.link)}
              >
                {slide.buttonText}
              </button>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
