import React from "react";
import { FaHeart, FaShareAlt, FaCheckCircle } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import CarReviews from "../CarReview/CarReviews";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const carDetail = useLoaderData();
  console.log(carDetail);
  const carImage =
    carDetail.images && carDetail.images.length > 0
      ? carDetail.images[0]
      : null;

  const features = carDetail.features;
  const featured = features.split(",").map((feature) => feature.trim());
  // const featureObj = fea
  // console.log(featured);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Car Image */}
      <div className="relative">
        <img
          src={`data:${carImage.mimetype};base64,${carImage.data}`}
          alt="Car"
          className="rounded-lg w-full"
        />
        <button className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded">
          New
        </button>
      </div>

      {/* Car Info */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{carDetail.model}</h1>
          <div className="flex items-center gap-2">
            <FaHeart className="text-red-500 cursor-pointer" />
            <FaShareAlt className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        <p className="text-lg text-red-600 font-semibold">
          ${carDetail.price} / Day
        </p>
        <p className="text-gray-600 mt-2">{carDetail.description}</p>
      </div>

      {/* Key Features */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Key Feature</h2>
        <div className="overflow-x-auto mt-4">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-500">
                  Feature
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {featured.map((feature, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-gray-500">
                    {feature}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    Included
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  Location
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  {carDetail.location}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  YEAR
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  2023 Model
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  Engine
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  2500CC
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  PASSENGER
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                {carDetail.seats}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  Registration Number
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  {carDetail.registrationNumber}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  GEAR
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  Automatic
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-500">
                  FUEL
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  Petrol
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
      <CarReviews></CarReviews>
      </div>

      {/* Global Discount */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Global Discount</h2>
        <table className="table-auto w-full mt-4 border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">
                Min - Max (Hours)
              </th>
              <th className="px-4 py-2 border border-gray-300">Price/Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">12 - 20</td>
              <td className="px-4 py-2 border border-gray-300">${carDetail.price}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Included in the Price */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Included in the Price</h2>
        <ul className="list-disc pl-5 mt-4">
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Additional Driver
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Map
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            Unlimited Mileage
          </li>
          <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          {featured.map((feature, index) => (
                <tr key={index}>
                  <td className=" px-1">
                    {feature}
                  </td>
                </tr>
              ))}
          </li>
        </ul>
      </div>

      {/* Rental Policy */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Rental Policy</h2>
        <ol className="list-decimal pl-5 mt-4 text-gray-600">
          <li>Pay only 15% & the rest at the destination.</li>
          <li>Cancel up to 48 hours before pick-up and get a full refund.</li>
          <li>Reservations require a license category A1.</li>
          <li>
            You need to be at least 18 years old or rent within 12 months of
            driving experience.
          </li>
          <li>
            A refundable security deposit is required (24 € debit-card) on
            pickup.
          </li>
          <li>The price includes unlimited mileage per day in the price.</li>
        </ol>
      </div>
      <table className="border-collapse w-full mt-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 ">Status</th>
            <th className="border text-center border-gray-300 px-4 py-2 ">
             { 
                carDetail.availability === 'Available' ? "Available" : "😥"
            
             }
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border text-center border-gray-300 px-4 py-2 text-gray-900">
            {carDetail.availability}
            </td>
            <td className="border border-gray-300 px-4 py-2 font-bold">
            <Link
            to={`/carBooking/${carDetail._id}`}
            className={`$ {
              car.availability === "Available"
                ? "text-white bg-green-500 btn hover:underline font-semibold text-sm hover:text-green-800"
                : "font-semibold text-sm"
            } py-2 rounded btn`}
            disabled={carDetail.availability !== "Available"}
          >
            {carDetail.availability === "Available" ? "BOOK NOW" : "Unavailable"}
          </Link>
            </td>
          </tr>
        </tbody>
      </table>
      


    </div>
  );
};

export default CarDetails;
