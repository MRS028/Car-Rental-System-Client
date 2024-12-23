import React, { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Loading from "../../Loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import NoCars from "./NoCar";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  // Fetch cars by user's email
  useEffect(() => {
    axios
      .get(`http://localhost:3000/myCars?email=${userEmail}`)
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) {
    return <Loading />;
  }

  const handleDelete = (carId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this car?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`http://localhost:3000/cars/${carId}`)
          .then((res) => {
            setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
            Swal.fire("Deleted!", "The car has been deleted.", "success");
          })
          .catch((err) => {
            console.error("error", err);
            Swal.fire(
              "Failed!",
              "There was an error deleting the car.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="p-4 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        My Cars
      </h2>

      {cars.length === 0 ? (
        <NoCars></NoCars>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="px-6 py-3 text-sm font-medium">SL</th>
                <th className="px-6 py-3 text-sm font-medium">Car Image</th>
                <th className="px-6 py-3 text-sm font-medium">Car Model</th>
                <th className="px-6 py-3 text-sm font-medium">
                  Daily Rental Price
                </th>
                <th className="px-6 py-3 text-sm font-medium">Availability</th>
                <th className="px-6 py-3 text-sm font-medium">Date Added</th>
                <th className="px-6 py-3 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr
                  key={car._id}
                  className="border-t border-gray-200 hover:bg-gray-100"
                >
                  <td className="px-6 py-4 font-semibold text-sm">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {car.images && car.images.length > 0 ? (
                      <img
                        src={`data:${car.images[0].mimetype};base64,${car.images[0].data}`}
                        alt={car.model}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">{car.model}</td>
                  <td className="px-6 py-4 text-sm">${car.price}</td>
                  <td className="px-6 py-4 text-sm">{car.availability}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(car.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm flex space-x-4">
                    <Link
                      to={`/updateCar/${car._id}`}
                      className="text-blue-500 hover:text-blue-800"
                    >
                      <FaEdit className="w-6 h-8" />
                    </Link>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="text-red-500 hover:text-red-800"
                    >
                      <FaTrashAlt className="w-6 h-6" />
                    </button>
                    <button className="flex items-center space-x-2 text-green-600 hover:text-blue-600 p-2 rounded-lg border border-green-500 hover:border-blue-700">
                      <FaEye className="text-lg" />
                      <span>View Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCars;
