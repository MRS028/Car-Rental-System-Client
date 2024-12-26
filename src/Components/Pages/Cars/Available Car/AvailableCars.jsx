import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";
import Loading from "../../Loading/Loading";
import { FaTh, FaList } from "react-icons/fa";
import useAxios from "../../../../Hooks/useAxios";
import useDocumentTitle from "../../../../Hooks/useDocumentTitle";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("date");
  useDocumentTitle("Available Car | Rent A Car");


  const axiosSecure = useAxios()

  useEffect(() => {
    axios.get("https://car-rental-system-server-five.vercel.app/allCars").then((res) => {
      setCars(res.data);
      setLoading(false);
    });

    // axiosSecure.get(`/myBookings?email=${userEmail}`).then(res=>{
    //   setCars(res.data);
    //   setLoading(false);
    // })





  }, []);

  // Filter and search ft
  const filteredCars = cars.filter((car) => {
    const model = car.model?.toLowerCase() || "";
    const brand = car.brand?.toLowerCase() || "";
    const location = car.location?.toLowerCase() || "";
    const searchTerm = search.toLowerCase();

    return (
      model.includes(searchTerm) ||
      brand.includes(searchTerm) ||
      location.includes(searchTerm)
    );
  });

  // Sort cars based on selected sort option
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOption === "price-lowest-first") return a.price - b.price; 
    if (sortOption === "price-highest-first") return b.price - a.price; 
    if (sortOption === "date-newest-first") return new Date(b.date) - new Date(a.date);
    if (sortOption === "date-oldest-first") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-center mt-5">
      <h2 className="text-3xl font-semibold">
        Available Cars : {sortedCars.length}
      </h2>

      {/* Search Input */}
      <div className="w-11/12 text-left  mx-auto my-4">
        <label className="block mx-2 font-medium">Search Your Car</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="Search by model, brand, or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* View Toggle and Sort Options */}
      <div className="flex justify-between items-center w-11/12 mx-auto mb-4">
      <select
          className="border border-gray-300 font-bold text-green-600 px-4 py-2 rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option >Sort Car</option>
          <option value="price-lowest-first">Price Lowest First</option>
          <option value="price-highest-first">price Highest First</option>
          <option value="date-newest-first">Date Newest First</option>
          <option value="date-oldest-first">Date Oldest First</option>
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
        >
          {/* Displaying icons based on viewMode */}
          {viewMode === "grid" ? (
            <FaList className="mr-2" /> 
          ) : (
            <FaTh className="mr-2" />
          )}
         {viewMode === "grid" ? "List" : "Grid"}
        </button>

        
      </div>

      {/* Display Cars */}
      <div
        className={`w-11/12  mx-auto grid p-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            : "grid-cols-1 gap-4"
        }`}
      >
        {sortedCars.map((car) => (
          <CarCard key={car.id} car={car} viewMode={viewMode} />
          
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
