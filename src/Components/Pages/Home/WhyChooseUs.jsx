import React from "react";
import { FaCarAlt, FaBolt, FaMapMarkerAlt } from "react-icons/fa";
import { TbGauge } from "react-icons/tb";
import ScrollAnimation from "react-animate-on-scroll";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "animate.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <TbGauge className="text-yellow-500 text-6xl" />,
      title: "4.6s",
      description: "From 0km/h to 100km/h",
    },
    {
      icon: <FaCarAlt className="text-yellow-500 text-6xl" />,
      title: "V8",
      description: "Extremely Powerful",
    },
    {
      icon: <TbGauge className="text-yellow-500 text-6xl" />,
      title: "320 km/h",
      description: "Maximum Speed",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-6xl" />,
      title: "Double",
      description: "Turbo Engine",
    },
    {
      icon: <FaMapMarkerAlt className="text-yellow-500 text-6xl" />,
      title: "Advanced",
      description: "Electronics",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 animate__animated animate__fadeInDown">
          <Typewriter
            words={["Why Choose Us!"]}
            loop={100}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              animateIn="animate__fadeInUp"
              duration={1}
              className="flex flex-col items-center text-center"
            >
              <div>{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </ScrollAnimation>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <Link
          to="/blogs"
          className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600 transition"
        >
          Read more
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
