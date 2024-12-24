import React from "react";
import { motion } from "framer-motion";
import { FaCarAlt, FaCalendarCheck, FaTools, FaMapMarkedAlt, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Choose the Perfect Rental Car",
      icon: <FaCarAlt className="text-blue-500 text-4xl" />, 
      content:
        "Choosing the right car for your trip is crucial. Whether you need a compact car for the city or an SUV for an adventure, our platform has a wide selection to meet your needs. Learn about factors like fuel efficiency, comfort, and affordability to make the right choice."
    },
    {
      title: "Benefits of Booking Cars in Advance",
      icon: <FaCalendarCheck className="text-green-500 text-4xl" />, 
      content:
        "Booking in advance helps you secure the best deals and ensures the availability of your preferred car. Planning ahead also gives you time to explore all options and add extra features like GPS, baby seats, or insurance to enhance your rental experience."
    },
    {
      title: "Why Regular Maintenance Matters for Rental Cars",
      icon: <FaTools className="text-red-500 text-4xl" />, 
      content:
        "Our cars go through rigorous maintenance checks to ensure safety and comfort. Regular servicing prevents unexpected breakdowns and keeps the vehicle in top-notch condition, giving you a hassle-free journey every time. Safety and reliability are our top priorities."
    },
    {
      title: "Top Travel Destinations with Rental Cars",
      icon: <FaMapMarkedAlt className="text-purple-500 text-4xl" />, 
      content:
        "Explore the most popular travel destinations with the freedom of a rental car. From scenic coastal drives to mountainous adventures, discover how a rental car can enhance your travel experience and give you the flexibility to create your own itinerary."
    },
    {
      title: "Cost-Effective Tips for Renting a Car",
      icon: <FaMoneyBillWave className="text-yellow-500 text-4xl" />, 
      content:
        "Get the best value for your money by understanding how rental pricing works. Learn about discounts, off-season rentals, and package deals to save on your next car rental. With our tips, you can enjoy quality service without breaking the bank."
    },
    {
      title: "Understanding Rental Insurance Options",
      icon: <FaShieldAlt className="text-teal-500 text-4xl" />, 
      content:
        "Protect yourself and your trip by choosing the right rental insurance. Understand the different coverage options available, including collision damage waivers and liability coverage, to make an informed decision and travel with peace of mind."
    }
  ];

  return (
    <div className="bg-gray-100 py-28 px-12 min-h-screen">
      <div className="text-center mb-20">
        <motion.h2
          className="text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Insights and Tips for Your Rental Experience
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Stay informed and make the most out of our car rental services. From tips on choosing the best car to understanding maintenance benefits, we have you covered.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="mb-6">{post.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {post.title}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">{post.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
