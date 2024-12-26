import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMapMarkerAlt, FaRegSmile } from "react-icons/fa";
import findsteps from "../../../assets/findSteps.jpg";
import { Typewriter } from "react-simple-typewriter";

const FindSteps = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl lg:text-5xl font-semibold">
     <Typewriter
                 words={["How to Find A Car!"]}
                 loop={100} 
                 typeSpeed={80} 
                 deleteSpeed={50} 
                 delaySpeed={2000} 
               />
        </h2>

      <div className="flex flex-col mt-2  rounded-t-lg md:w-[80%] mx-auto text-center lg:flex-row items-center p-8 bg-gray-100">
        <div className="flex flex-col w-full lg:w-1/2 space-y-8">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              animate={{ x: -30 }}
              transition={{
                duration: 2,
                delay: index * 2,
                ease: "easeOut",
                repeat: Infinity,
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-bold flex items-center space-x-2">
                  {step.icon}
                  <span>{step.title}</span>
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="w-full pt-5 lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
        >
          <img
            src={findsteps}
            alt="Rent A Car"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

const stepsData = [
  {
    number: "01",
    icon: <FaCar size={24} />,
    title: "FIND A CAR",
    description: "Find the best car around you at very affordable price.",
  },
  {
    number: "02",
    icon: <FaMapMarkerAlt size={24} />,
    title: "PUT YOUR LOCATION AND CONFIRM RENT",
    description: "Inform us where would you like to travel.",
  },
  {
    number: "03",
    icon: <FaRegSmile size={24} />,
    title: "MAKE RIDE",
    description: "Have a comfortable journey with us.",
  },
];

export default FindSteps;
