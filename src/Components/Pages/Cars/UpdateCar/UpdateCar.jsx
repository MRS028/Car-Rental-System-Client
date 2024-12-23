import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaCar,
  FaDollarSign,
  FaClipboardList,
  FaMapMarkerAlt,
  FaTimes,  // Close icon
} from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateCar = () => {
  const car = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    model: car.model || "",
    price: car.price || "",
    availability: car.availability || "",
    registrationNumber: car.registrationNumber || "",
    features: car.features || "",
    description: car.description || "",
    location: car.location || "",
    images: car.images || [],
  });

  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setCarData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...acceptedFiles],
      }));
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (
      !carData.model ||
      !carData.price ||
      !carData.location ||
      !carData.registrationNumber ||
      !carData.availability
    ) {
      Swal.fire("Error", "Please fill in all required fields", "error");
      return;
    }

    // Ensure at least one image is uploaded
    if (carData.images.length === 0) {
      Swal.fire("Error", "Please upload at least one image.", "error");
      return;
    }

    const formData = new FormData();
    Object.keys(carData).forEach((key) => {
      if (key !== "images") {
        formData.append(key, carData[key]);
      }
    });

    // Append images to FormData
    carData.images.forEach((image) => {
      formData.append("images", image);
    });

    // Axios PUT request to update car data
    axios
      .put(`http://localhost:3000/cars/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire("Success", response.data.message, "success");
        navigate('/myCar')
        setIsModalOpen(false); // Close modal after successful update
      })
      .catch((error) => {
        Swal.fire(
          "Error",
          "Failed to update the car. Please try again later.",
          "error"
        );
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/myCar') // Close the modal
  };

  if (!isModalOpen) return null; 

  return (
    <div className="fixed p-2 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-2xl h-auto max-h-[700px] overflow-auto relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-red-500  text-2xl"
        >
          <FaTimes /> {/* Close icon */}
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">Update Car Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Car Model */}
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

          {/* Daily Rental Price */}
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

          {/* Availability */}
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

          {/* Vehicle Registration Number */}
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

          {/* Features */}
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

          {/* Description */}
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

          {/* Location */}
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

          {/* Image Upload */}
          <div
            {...getRootProps()}
            className="border border-dashed border-gray-300 p-4 rounded-lg"
          >
            <input {...getInputProps()} />
            <p className="text-center text-gray-500">
              {isDragActive
                ? "Drop the images here..."
                : "Drag & drop images here, or click to select files"}
            </p>
          </div>

          {/* Image Preview */}
          {carData.images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-2">
              {carData.images.map((file, index) => {
                let imageUrl;
                try {
                  imageUrl =
                    typeof file === "string" ? file : URL.createObjectURL(file);
                } catch (error) {
                  console.error("Error creating object URL:", error);
                  return null;
                }
                return (
                  <img
                    key={index}
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                );
              })}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
