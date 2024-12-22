import React, { useEffect, useState } from "react";
import axios from "axios";
import { div, h2 } from "framer-motion/client";
import CarCard from "./CarCard";
import Loading from "../../Loading/Loading";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get("http://localhost:3000/allCars").then((res) => {
      setCars(res.data);
      setLoading(false);
    });
  }, []);
  console.log(cars);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="text-center mt-5">
      <h2 className="text-3xl font-semibold">Available car: {cars.length} </h2>

      <div className="w-11/12 mx-auto grid p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
