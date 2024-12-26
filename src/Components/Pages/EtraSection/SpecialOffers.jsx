import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const offers = [
  {
    id: 1,
    title: "Get 15% off for weekend rentals!",
    description: "Book now and enjoy exclusive discounts for your weekend trips.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Luxury cars at $99/day this holiday season!",
    description: "Experience luxury like never before at unbeatable prices.",
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "Special offer: Rent 2 days, get 1 day free!",
    description: "Perfect for family outings and road trips.",
    buttonText: "View Details",
  },
  {
    id: 4,
    title: "Business Class Rentals at 20% Off!",
    description: "Upgrade your business trips with premium cars at discounted rates.",
    buttonText: "Learn More",
  },
  {
    id: 5,
    title: "Exclusive Deal: SUVs at $75/day!",
    description: "Take the whole family on an adventure with our spacious SUVs.",
    buttonText: "Book Now",
  },
  {
    id: 6,
    title: "Holiday Special: 25% Off Luxury Sedans!",
    description: "Travel in style this holiday season without breaking the bank.",
    buttonText: "View Details",
  },
  {
    id: 7,
    title: "Early Bird Discount: Save 10% on Advance Bookings!",
    description: "Plan ahead and save more on your next trip.",
    buttonText: "Learn More",
  },
  {
    id: 8,
    title: "Weekend Getaway Special: Compact Cars at $50/day!",
    description: "Perfect for short trips and city commutes this weekend.",
    buttonText: "Book Now",
  },
];

const SpecialOffers = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 to-gray-100 py-10 px-5 md:px-20 lg:px-40">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        <Typewriter
          options={{
            strings: ["Special Offers Just for You!", "Don't Miss Out on Great Deals!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start justify-between hover:shadow-2xl transition duration-300 transform hover:scale-105 border-t-4 border-green-500"
            style={{ background: `linear-gradient(135deg, #${Math.floor(Math.random() * 16777215).toString(16)}33, #fff)` }}
          >
            <h2 className="text-xl font-extrabold text-green-700 mb-3">{offer.title}</h2>
            <p className="text-gray-600 mb-5">{offer.description}</p>
            <Link to='/availableCars'><button
              className="bg-green-500 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              {offer.buttonText}
              <FiArrowRight className="text-lg" />
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
