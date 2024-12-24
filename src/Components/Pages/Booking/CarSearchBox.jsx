import React from "react";

const CarSearchBox = ({ onSearch}) => {
  const handleChange = (field, value) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
      {/* Pick-up Location */}
      <div className="flex flex-col items-start">
        <label className="text-sm font-semibold text-gray-700 mb-1">Pick-up Location</label>
        <select
          className="bg-gray-100 p-2 rounded-lg text-gray-600 w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchFilters.pickupLocation}
          onChange={(e) => handleChange("pickupLocation", e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="New York">Dhaka</option>
          <option value="Los Angeles">Sylhet</option>
          <option value="Chicago">Chittagong</option>
          <option value="Chicago">Khulna</option>
        </select>
      </div>

      {/* Pick-up Date */}
      <div className="flex flex-col items-start">
        <label className="text-sm font-semibold text-gray-700 mb-1">Pick-up Date</label>
        <input
          type="date"
          className="bg-gray-100 p-2 rounded-lg text-gray-600 w-56"
          value={searchFilters.pickupDate}
          onChange={(e) => handleChange("pickupDate", e.target.value)}
        />
      </div>

      {/* Drop-off Date */}
      <div className="flex flex-col items-start">
        <label className="text-sm font-semibold text-gray-700 mb-1">Drop-off Date</label>
        <input
          type="date"
          className="bg-gray-100 p-2 rounded-lg text-gray-600 w-56"
          value={searchFilters.dropoffDate}
          onChange={(e) => handleChange("dropoffDate", e.target.value)}
        />
      </div>

      {/* Car Type */}
      <div className="flex flex-col items-start">
        <label className="text-sm font-semibold text-gray-700 mb-1">Car Type</label>
        <select
          className="bg-gray-100 p-2 rounded-lg text-gray-600 w-56"
          value={searchFilters.carType}
          onChange={(e) => handleChange("carType", e.target.value)}
        >
          <option value="">Car Type</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Truck">Truck</option>
        </select>
      </div>

      {/* Find a Car Button */}
      <div className="flex items-center">
        <button
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600"
          onClick={onSearch}
        >
          Find a Car
        </button>
      </div>
    </div>
  );
};

export default CarSearchBox;
