import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useDocumentTitle from "../../../Hooks/useDocumentTitle";

const CarBookingForm = () => {
  const { user } = useContext(AuthContext);
  const car = useLoaderData();
  const userName = user?.displayName;
  const userEmail = user?.email;
  const navigate = useNavigate();
  useDocumentTitle("Car Booking Form | Rent A Car");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const { images, bookingStatus, ...bookingCar } = initialData;

    bookingCar.registrationNumber = car.registrationNumber;
    bookingCar.bookingStatus = "Confirmed";

    axios
      .post("https://car-rental-system-server-five.vercel.app/bookingCar", bookingCar, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank You! Booking Submitted Successfully!",
            text: "Have a nice journey!",
            timer: 1500,
            showConfirmButton: true,
            confirmButtonColor: "#1ace53",
          });
          navigate("/MyBookings");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the booking.");
      });
  };
  const handleCount = (carId) => {
    // console.log(car._id);
    axios
      .put(`https://car-rental-system-server-five.vercel.app/increment/${carId}`, { carId })
      .then((response) => {
        // console.log("Response Data:", response.data);
        if (response.data && response.data.bookingCount !== undefined) {
          // console.log("Booking Count Updated:", response.data.bookingCount);
        } else {
          console.error("Booking count not found in response!");
        }
      });
  };

  return (
    <form
      className="w-11/12 mx-auto border mb-5 mt-5 p-6 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Car Booking Form
      </h2>

      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        {/* Name */}
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={userName}
            readOnly
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={userEmail}
            readOnly
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Pick-up Location */}
        <div>
          <label className="block mb-2 font-medium">Pick-up Location</label>
          <select
            name="pickUpLocation"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option>Pick-up Location</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Cumilla</option>
            <option>Sylhet</option>
            <option>Rajshahi</option>
            <option>Khulna</option>
            <option>Barishal</option>
          </select>
        </div>

        {/* Pick-up Date */}
        <div>
          <label className="block mb-2 font-medium">Pick-up Date</label>
          <input
            type="date"
            name="pickUpDate"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Drop-off Location */}
        <div>
          <label className="block mb-2 font-medium">Drop-off Location</label>
          <select
            name="dropOffLocation"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option>Drop-off Location</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Cumilla</option>
            <option>Sylhet</option>
            <option>Rajshahi</option>
            <option>Khulna</option>
            <option>Barishal</option>
          </select>
        </div>

        {/* Drop-off Date */}
        <div>
          <label className="block mb-2 font-medium">Drop-off Date</label>
          <input
            type="date"
            name="dropOffDate"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Car Type */}
        <div>
          <label className="block mb-2 font-medium">Car Type</label>
          <select
            name="carType"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            <option>Car Type</option>
            <option>Noah</option>
            <option>Sedan</option>
            <option>Van</option>
            <option>Hatchback</option>
            <option>Haice</option>
            <option>Royal</option>
            <option>Cavard</option>
            <option>Isuzuki</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={() => handleCount(car._id)}
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Book Now
      </button>
    </form>
  );
};

export default CarBookingForm;
