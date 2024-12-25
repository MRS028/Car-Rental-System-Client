import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "../../Loading/Loading";
import { FaCar } from "react-icons/fa";
import useAxios from "../../../../Hooks/useAxios";

const RecentListings = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxios();

  useEffect(() => {
    // axios.get("http://localhost:3000/allCars").then((res) => {
    //   const sortedCars = res.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by recent date
    //   setCars(sortedCars);
    //   setLoading(false); });

      axiosSecure.get(`allCars`).then(res=>{
        const sortedCars = res.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by recent date
      setCars(sortedCars);
      setLoading(false);
      })

   
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
//   console.log(cars[1]?.bookingCount)

  return (
    <section className="my-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Recent Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.slice(0, 8).map((car) => (
          <motion.div
            key={car._id}
            className="card w-full bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <figure className="h-64 w-full overflow-hidden rounded-t-lg bg-gray-200">
              {car.images && car.images.length > 0 ? (
                <img
                  src={`data:${car.images[0].mimetype};base64,${car.images[0].data}`}
                  alt={car.model}
                  className="w-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No Image Available
                </div>
              )}
            </figure>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.model}</h3>
              <p className="text-lg text-gray-700">${car.price} / day</p>
              <div className="my-2">
                <span
                  className={`badge ${
                    car.availability === "Available" ? "badge-success" : "badge-error"
                  }`}
                >
                  {car.availability}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-600 mt-2">
                <FaCar className="inline-block mr-1" />
                Bookings: {car?.bookingCount} Confirmed
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Added: <span> </span>
                {(() => {
                  const now = new Date();
                  const addedDate = new Date(car.date);
                  const diffInSeconds = Math.floor((now - addedDate) / 1000);

                  if (diffInSeconds < 60) {
                    return `${diffInSeconds} seconds ago`;
                  }

                  const diffInMinutes = Math.floor(diffInSeconds / 60);
                  if (diffInMinutes < 60) {
                    return `${diffInMinutes} minutes ago`;
                  }

                  const diffInHours = Math.floor(diffInMinutes / 60);
                  if (diffInHours < 24) {
                    return `${diffInHours} hours ago`;
                  }

                  const diffInDays = Math.floor(diffInHours / 24);
                  return `${diffInDays} days ago`;
                })()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
