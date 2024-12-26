import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FaCar,
  FaMapMarkerAlt,
  FaDollarSign,
  FaClipboardList,
} from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../../Hooks/useDocumentTitle";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  const [carData, setCarData] = useState({
    model: "",
    price: "",
    availability: "",
    registrationNumber: "",
    features: "",
    seats: "",
    description: "",
    location: "",
    bookingCount: 0,
    images: [],
  });

  const [userDetails] = useState({
    name: user?.displayName,
    email: user.email,
  });
  const navigate = useNavigate();
  useDocumentTitle("Add Car | Rent A Car");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrop = (acceptedFiles) => {
    setCarData((prev) => ({
      ...prev,
      images: [...prev.images, ...acceptedFiles],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString();
    const bookingStatus = "Pending";

    const formData = new FormData();
    formData.append("model", carData.model);
    formData.append("price", carData.price);
    formData.append("availability", carData.availability);
    formData.append("registrationNumber", carData.registrationNumber);
    formData.append("features", carData.features);
    formData.append("seats", carData.seats);
    formData.append("description", carData.description);
    formData.append("location", carData.location);
    formData.append("date", currentDate);
    formData.append("bookingStatus", bookingStatus);
    formData.append("bookingCount", carData.bookingCount);
    formData.append("userName", userDetails.name);
    formData.append("userEmail", userDetails.email);

    // Append images
    carData.images.forEach((file) => {
      formData.append("images", file);
    });
    console.log(carData);

    axios
      .post("https://car-rental-system-server-five.vercel.app/cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          setCarData({
            model: "",
            price: "",
            availability: "",
            registrationNumber: "",
            features: "",
            seats: "",
            description: "",
            location: "",
            bookingCount: 0,
            images: [],
          });
          // console.log(res.data.insertedId)
          navigate("/myCar");
          Swal.fire({
            icon: "success",
            title: "Thank You!",
            text: "You have Added a Car Successfully!",
            timer: 1500,
            showConfirmButton: true,
            confirmButtonColor: "#1ace53",
          });
        }
        // console.log("Response:", res.data);
      })
      .catch((err) => {
        console.error("Error adding car:", err);
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
  });

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
          <label className="block font-medium">Seats</label>
          <input
            type="number"
            name="seats"
            defaultValue={4}
            placeholder="No. of Seats"
            value={carData.seats}
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
        {carData.images.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {carData.images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
