import React, { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";
import Loading from "../../Loading/Loading";
import { FaTh, FaList } from "react-icons/fa";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    axios.get("http://localhost:3000/allCars").then((res) => {
      setCars(res.data);
      setLoading(false);
    });
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
    if (sortOption === "price") return a.price - b.price;
    if (sortOption === "date") return new Date(b.date) - new Date(a.date);
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
          className="border border-gray-300 px-4 py-2 rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="price">Sort by Price</option>
        </select>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
        >
          {/* Displaying icons based on viewMode */}
          {viewMode === "grid" ? (
            <FaList className="mr-2" /> // List icon for grid view
          ) : (
            <FaTh className="mr-2" /> // Grid icon for list view
          )}
          Toggle to {viewMode === "grid" ? "List" : "Grid"} View
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
