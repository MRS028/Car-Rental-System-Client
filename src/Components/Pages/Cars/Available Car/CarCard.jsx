import { FaCarSide } from "react-icons/fa";
import { BsGear, BsFuelPump } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { FaMapMarkerAlt } from 'react-icons/fa';

function CarCard({ car, viewMode }) {
  const carImage = car.images && car.images.length > 0 ? car.images[0] : null;

  return (
    <div
      className={`card w-11/12 border mx-auto bg-white rounded-lg shadow-md overflow-hidden h- ${
        viewMode === "list" ? "flex flex-col lg:flex-row border p-2 justify-between" : "grid grid-cols-1"
      }`}
    >
      {/* part-1(image) for card*/}
      <div className={`w-full mx-auto   ${viewMode === "list" ? "lg:w-1/3" : "relative"}`}>
        {carImage ? (
          <figure className={` ${viewMode === "grid" ? 'lg:h-64' : 'lg:h-full'}   md:h-[150px] w-full overflow-hidden rounded-t-lg bg-gray-200`}>
            <img
            src={`data:${carImage.mimetype};base64,${carImage.data}`}
            alt={car.model}
            className={`w-full h-full   object-cover ${viewMode === "list" ? "rounded-lg" : "rounded-t-lg"}`}
          />
          </figure>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          {new Date(car.date).toLocaleDateString()}
        </span>
      </div>

      {/* part-2 for card */}
      <div className={`p-4 card-body flex flex-col justify-between h-full`}>
        {/* star and book now */}
      
        <div className="flex justify-between items-center mb-2 card-title">
          <span className="text-yellow-400 text-2xl">★★★★★</span>
          <span
            
            className={`badge p-3 ${
              car.availability === "Available"
                ? "text-white bg-blue-500 top-2 left-2   px-2 py-1 rounded  font-semibold text-sm p-2"
                : "font-semibold text-sm text-white bg-red-500 p-2"
            } py-2 rounded `}
            disabled={car.availability !== "Available"}
          >
            {car.availability === "Available" ? "Available" : "Unavailable"}
          </span>
        </div>
        {/* title and name */}
        <div className="text-left">
          <p className="text-2xl card-title font-semibold">{car.model}</p>
          <p className="font-bold pb-4 text-xl">
            ${car.price}.00 <span className="text-gray-500 text-sm">/ Day</span>
          </p>
          <Link
            to={car.availability === "Available" ? `/carBooking/${car._id}` : "/availableCars"}
            className={` ${
              car.availability === "Available"
                ? "text-white bg-green-500 hover:underline p-2 font-semibold text-sm hover:bg-green-600"
                : "font-semibold bg-gray-300 p-2 text-sm"
            } py-2 rounded`}
            disabled={car.availability !== "Available"}
          >
            {car.availability === "Available" ? "BOOK NOW" : "Unavailable"}
          </Link>
          
        </div>

        <div className="my-4 divider" />

        <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
          <div className="flex text-left gap-1">
            <FaCarSide className="text-green-600 text-xl" /> <p className="font-semibold opacity-95">Seats: {car.seats}</p>
          </div>
          <div className="flex text-left gap-1">
            <BsGear className="text-green-600 text-xl" /> <p className="font-semibold opacity-95">Automatic</p>
          </div>
          <div className="flex text-left gap-1">
            <BsFuelPump className="text-green-600 text-xl" /> <p className="font-semibold opacity-95">Fuel: Petrol</p>
          </div>
          <div className="flex text-left gap-1">
          <FaMapMarkerAlt className="text-green-500 text-xl"/> <p className="font-semibold opacity-95">Location: {car.location}</p>
          </div>
          {/* <div className="flex text-left gap-1">
            <p>Features: {car.features}</p>
          </div> */}
        </div>

        <Link
          to={`/carDetails/${car._id}`}
          className="mt-4 w-full bg-green-500 text-white btn py-2 hover:bg-green-700 text-center"
        >
          Details...
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
