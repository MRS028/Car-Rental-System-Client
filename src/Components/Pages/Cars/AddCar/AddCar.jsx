import React, { useState } from "react";
import { FaCar, FaMapMarkerAlt, FaDollarSign, FaClipboardList } from "react-icons/fa";

const AddCar = () => {
  const [carData, setCarData] = useState({
    model: "",
    price: "",
    availability: "",
    registrationNumber: "",
    features: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Add a New Car</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <FaCar className="text-xl text-gray-500" />
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            value={carData.model}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <FaDollarSign className="text-xl text-gray-500" />
          <input
            type="number"
            name="price"
            placeholder="Daily Rental Price"
            value={carData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Availability</label>
          <select
            name="availability"
            value={carData.availability}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          >
            <option value="">Select Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <FaClipboardList className="text-xl text-gray-500" />
          <input
            type="text"
            name="registrationNumber"
            placeholder="Vehicle Registration Number"
            value={carData.registrationNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Features</label>
          <input
            type="text"
            name="features"
            placeholder="e.g., GPS, AC"
            value={carData.features}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Car Description"
            value={carData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-xl text-gray-500" />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={carData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <div className="border border-dashed border-gray-300 p-4 rounded-lg">
          <input />
          <p className="text-center text-gray-500">Drag & drop images here, or click to select files</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
