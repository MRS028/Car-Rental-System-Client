import React from "react";
import { FaCarAlt, FaMoneyBillWave, FaCalendarAlt, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCarAlt size={40} className="text-yellow-500" />,
      title: "Wide Variety of Cars",
      description: "From budget-friendly options to luxury vehicles.",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-green-500" />,
      title: "Affordable Prices",
      description: "Competitive daily rates you can count on.",
    },
    {
      icon: <FaCalendarAlt size={40} className="text-blue-500" />,
      title: "Easy Booking Process",
      description: "Seamlessly book your ride in just a few clicks.",
    },
    {
      icon: <FaHeadset size={40} className="text-red-500" />,
      title: "Customer Support",
      description: "24/7 assistance for all your queries.",
    },
  ];

  return (
    <div className="bg-white py-10 w-[70%] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          repeat: 10, 
          repeatDelay: 4, 
        }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl lg:text-4xl p-2 font-bold">
          <Typewriter
            words={["Why Choose Us?"]}
            loop={100} 
            typeSpeed={80} 
            deleteSpeed={50} 
            delaySpeed={2000} 
          />
        </h2>
        <p className="text-gray-600">
          Explore the benefits we offer for your convenience.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 5,
                repeat: 10, 
                repeatDelay: 4,
            }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
