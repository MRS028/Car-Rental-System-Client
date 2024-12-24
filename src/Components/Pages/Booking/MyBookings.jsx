import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const BookingTable = () => {
  const bookings = [
    {
      id: 1,
      carImage: "https://via.placeholder.com/64",
      carModel: "Toyota Corolla 2023",
      bookingDate: "2024-12-25T14:30:00",
      totalPrice: "120.00",
      status: "Confirmed",
    },
    {
      id: 2,
      carImage: "https://via.placeholder.com/64",
      carModel: "Honda Civic 2022",
      bookingDate: "2024-12-26T09:00:00",
      totalPrice: "90.00",
      status: "Pending",
    },
    {
      id: 3,
      carImage: "https://via.placeholder.com/64",
      carModel: "Ford Mustang 2021",
      bookingDate: "2024-12-27T12:00:00",
      totalPrice: "200.00",
      status: "Cancelled",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Car Image</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Car Model</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Booking Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Price</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={booking.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:shadow-md transition duration-200`}
            >
              <td className="px-6 py-4">
                <img
                  src={booking.carImage}
                  alt={booking.carModel}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">{booking.carModel}</td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {new Date(booking.bookingDate).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">${booking.totalPrice}</td>
              <td
                className={`px-6 py-4 text-sm font-semibold ${
                  booking.status === "Confirmed"
                    ? "text-green-500"
                    : booking.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {booking.status}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  className="bg-blue-500 text-white text-sm px-3 py-2 rounded mr-2 hover:bg-blue-600 flex items-center gap-1"
                >
                  <FaEdit /> Modify
                </button>
                <button
                  className="bg-red-500 text-white text-sm px-3 py-2 rounded hover:bg-red-600 flex items-center gap-1"
                >
                  <FaTrashAlt /> Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
