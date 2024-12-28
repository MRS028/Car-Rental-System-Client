import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const TestimonialCard = () => {
  const testimonialsData = [
    {
      name: "Mike Hardson",
      profileImage: "https://i.ibb.co/1rLj4K5/alex.jpg",
      rating: 5,
      review:
        "I was very impressed by the service. The cars are in great condition and the process was seamless.",
    },
    {
      name: "Jessica Brown",
      profileImage: "https://i.ibb.co/GMyGJTq/Emoji.jpg",
      rating: 5,
      review:
        "Amazing service! The team was very professional and helpful. Highly recommended!",
    },
    {
      name: "Kenvin Martin",
      profileImage: "https://i.ibb.co/3fwRdkh/image.png",
      rating: 4,
      review:
        "The booking process was easy, and the car quality was excellent. Will definitely use again!",
    },
    {
      name: "Abir Raihan",
      profileImage: "https://i.ibb.co/NCw886L/image.png",
      rating: 5,
      review:
        "Amazing service! The team was very professional and helpful. Highly recommended!",
    },
    {
      name: "Rakib Bhai",
      profileImage: "https://i.ibb.co/DkbmZBv/Rakib-bhai.jpg",
      rating: 5,
      review:
        "I was very impressed by the service. The cars are in great condition and the process was seamless.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-5 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          <Typewriter
            words={["What They are Talking About Us?"]}
            loop={100}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25, // Increased duration for smoother transition
          }}
          style={{ width: `calc(${testimonialsData.length * 2} * 20rem)` }} // Dynamic width to accommodate all cards
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80"
            >
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <FaQuoteLeft className="text-3xl" />
                </div>
                <p className="text-gray-700 text-center mb-4">
                  "{testimonial.review}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonialsData.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80"
            >
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <FaQuoteLeft className="text-3xl" />
                </div>
                <p className="text-gray-700 text-center mb-4">
                  "{testimonial.review}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCard;
