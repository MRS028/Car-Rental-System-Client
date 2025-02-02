import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Loading from "../Loading/Loading";
import NoCars from "../Cars/My Car/NoCar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PriceChart from "./PriceChart";
import useAxios from "../../../Hooks/useAxios";
import useDocumentTitle from "../../../Hooks/useDocumentTitle";

const MyBookings = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useDocumentTitle("My Booking | Rent A Car");

  const userEmail = user?.email;
  const axiosSecure = useAxios();

  useEffect(() => {
    axiosSecure
      .get(`/myBookings?email=${userEmail}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) {
    return <Loading />;
  }

  const chartData = bookings.map((booking) => ({
    carModel: booking?.carInfo?.model || "Unknown",
    price: booking?.carInfo?.price || 0,
  }));

  // Handle Modify
  const handleModify = (BookingID) => {
    //console.log(BookingID);
    const preBookingStatus = bookings.find(
      (booking) => booking._id === BookingID
    );

    //  console.log(preBookingStatus.bookingStatus);

    if (preBookingStatus.bookingStatus === "Canceled") {
      Swal.fire({
        title: "Already Canceled!",
        text: "You have already Canceled it!",
        icon: "info",
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      title: "Modify Booking Date",
      html: `
        <div class="space-y-4">
          <label for="start-date" class="block text-sm font-medium text-gray-700">Start Date</label>
          <input type="date" id="start-date" class="block w-full border-gray-300 rounded-md" />
          
          <label for="end-date" class="block text-sm font-medium text-gray-700">End Date</label>
          <input type="date" id="end-date" class="block w-full border-gray-300 rounded-md" />
        </div>`,
      focusConfirm: false,
      preConfirm: () => {
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;

        if (!startDate || !endDate) {
          Swal.showValidationMessage("Please select both start and end date");
        } else {
          return { startDate, endDate };
        }
      },
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        // setLoading(true)

        const { startDate, endDate } = result.value;

        axios
          .put(
            `https://car-rental-system-server-five.vercel.app/updateBooking/${BookingID}`,
            {
              bookingStatus: "Confirmed",
              pickUpDate: startDate,
              dropOffDate: endDate,
            }
          )
          .then((response) => {
            Swal.close();
            Swal.fire({
              title: "Loading...",
              html: "Please wait while we load the data.",
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });

            axiosSecure
              .get(`/myBookings?email=${userEmail}`)
              .then((res) => {
                setBookings(res.data);
                Swal.close();
                Swal.fire({
                  title: "Booking Updated",
                  text: "The booking dates have been updated successfully.",
                  icon: "success",
                  timer: 1500,
                  confirmButtonColor: "#28a745",
                });
                // setLoading(false)
              })
              .catch((err) => {
                console.error("Error fetching updated bookings:", err);
              });
          })
          .catch((error) => {
            console.error("Error updating booking:", error);
            Swal.fire({
              title: "Error",
              text: "There was an issue updating the booking. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  //handle Delete
  const handelBookingCancel = (BookingID) => {
    const bookingToCancel = bookings.find(
      (booking) => booking._id === BookingID
    );
    // console.log(bookingToCancel.bookingStatus)
    if (bookingToCancel.bookingStatus === "Canceled") {
      Swal.fire({
        title: "Already Canceled",
        text: "This booking has already been canceled.",
        icon: "info",
        timer: 1500,
        confirmButtonColor: "#28a745",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#28a745",
      confirmButtonText: "Yes, Cancel it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .put(
            `https://car-rental-system-server-five.vercel.app/updateBooking/${BookingID}`,
            {
              bookingStatus: "Canceled",
              // pickUpDate: startDate,
              // dropOffDate: endDate,
            }
          )
          .then((response) => {
            Swal.close();
            Swal.fire({
              title: "Loading...",
              html: "Please wait while we load the data.",
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
            });
            axiosSecure
              .get(`/myBookings?email=${userEmail}`)
              .then((res) => {
                setBookings(res.data);
                Swal.close();
                Swal.fire({
                  title: "Booking Cancelled!",
                  text: "The booking status has been updated successfully.",
                  icon: "success",
                  timer: 1500,
                  confirmButtonColor: "#28a745",
                });
              })
              .catch((err) => {
                console.error("Error fetching updated bookings:", err);
              });
          })
          .catch((error) => {
            console.error("Error updating booking:", error);
            Swal.fire({
              title: "Error",
              text: "There was an issue updating the booking. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };
  //Permenantly delete this
  const handleDelete = (id) => {
    const bookingToCancel = bookings.find((booking) => booking._id === id);
    // console.log(id);
    if (bookingToCancel.bookingStatus === "Canceled") {
      axios.delete(`https://car-rental-system-server-five.vercel.app/bookingcar/${id}`).then((res) => {
        setBookings((pre) => pre.filter((book) => book._id !== id));
        Swal.fire({
          title: "Deleted",
          text: "Item has been deleted successfully.",
          icon: "success",
          timer: 1500,
        });
      });
    } else {
      Swal.fire({
        title: "STOP",
        text: "This is your running Booking",
        icon: "info",
        timer: 1500,
      });
    }
  };

  return (
    <div className="overflow-x-auto w-11/12 mx-auto mt-5 mb-5 rounded-lg">
      {bookings.length === 0 ? (
        <NoCars />
      ) : (
        <div className="text-center">
          <h2 className="text-xl lg:text-3xl font-semibold pb-4">
            My Bookings
          </h2>

          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  SL NO.
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Car Image
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Car Model
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Starting Date
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Ending Date
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Total Price
                </th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
                <th className="px-6 py-3 text-sm font-medium">Delete This</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition duration-200`}
                >
                  <td className="text-center text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    {booking?.carInfo?.images &&
                    booking?.carInfo?.images.length > 0 ? (
                      <img
                        src={`data:${booking.carInfo.images[0].mimetype};base64,${booking.carInfo.images[0].data}`}
                        alt={booking?.carInfo?.model || "Car"}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>
                  <td className="text-sm text-gray-700">
                    {booking?.carInfo?.model || "N/A"}
                  </td>
                  <td className="text-sm text-gray-700">
                    {booking.pickUpDate
                      ? new Date(booking.dropOffDate).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </td>
                  <td className="text-sm text-gray-700">
                    {booking.dropOffDate
                      ? new Date(booking.pickUpDate).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "N/A"}
                  </td>
                  <td className="text-sm text-gray-700">
                    ${booking?.carInfo?.price || "0.00"}
                  </td>
                  <td
                    className={`text-sm font-semibold ${
                      booking?.bookingStatus === "Confirmed"
                        ? "text-green-500"
                        : booking?.bookingStatus === "Canceled"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {booking?.bookingStatus || "Canceled"}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleModify(booking._id)}
                      className="bg-blue-500 text-white text-sm px-3 py-2 rounded mr-2 hover:bg-blue-600 flex gap-1"
                    >
                      <FaEdit /> Modify
                    </button>
                    <button
                      onClick={() => handelBookingCancel(booking._id)}
                      className="bg-red-500 mt-2 text-white text-sm px-3 py-2 rounded hover:bg-red-600 flex items-center gap-1"
                    >
                      <FaTrashAlt /> Cancel
                    </button>
                  </td>
                  <td className="px-6 py-4 font-semibold text-sm flex justify-center">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn bg-white"
                    >
                      ❌
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <PriceChart />
        </div>
      )}
    </div>
  );
};

export default MyBookings;
