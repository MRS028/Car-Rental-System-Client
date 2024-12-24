import { FaCarSide } from "react-icons/fa";
import { BsGear, BsFuelPump } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";

function CarCard({ car, viewMode }) {
  const carImage = car.images && car.images.length > 0 ? car.images[0] : null;

  return (
    <div
      className={`card bg-white rounded-lg shadow-md overflow-hidden h-full ${
        viewMode === "list" ? "flex flex-col lg:flex-row border p-2 justify-between" : "grid grid-cols-1"
      }`}
    >
      {/* part-1(image) for card*/}
      <div className={`${viewMode === "list" ? "lg:w-1/3" : "relative"}`}>
        {carImage ? (
          <img
            src={`data:${carImage.mimetype};base64,${carImage.data}`}
            alt={car.model}
            className={`w-full lg:h-[352px]  object-cover ${viewMode === "list" ? "rounded-lg" : "rounded-t-lg"}`}
          />
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
          <Link
            to={`/carDetails/${car._id}`}
            className={`$ {
              car.availability === "Available"
                ? "text-white bg-green-500 btn hover:underline font-semibold text-sm hover:text-green-800"
                : "font-semibold text-sm"
            } py-2 rounded btn`}
            disabled={car.availability !== "Available"}
          >
            {car.availability === "Available" ? "BOOK NOW" : "Unavailable"}
          </Link>
        </div>
        {/* title and name */}
        <div className="text-center">
          <p className="text-2xl card-title font-semibold">{car.model}</p>
          <p className="font-bold text-xl">
            ${car.price}.00 <span className="text-gray-500 text-sm">/ Day</span>
          </p>
          <p className="text-xl card-title font-semibold">Location:{car.location}</p>

        </div>

        <hr className="my-4" />

        <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
          <div className="flex text-left gap-1">
            <FaCarSide className="text-green-600" /> <p>Seats: {car.seats}</p>
          </div>
          <div className="flex text-left gap-1">
            <BsGear className="text-green-600" /> <p>Automatic</p>
          </div>
          <div className="flex text-left gap-1">
            <BsFuelPump className="text-green-600" /> <p>Fuel: Petrol</p>
          </div>
          <div className="flex text-left gap-1">
            <BsFuelPump className="text-green-600" /> <p>Location: {car.location}</p>
          </div>
          {/* <div className="flex text-left gap-1">
            <p>Features: {car.features}</p>
          </div> */}
        </div>

        <Link
          to={`/carDetails/${car._id}`}
          className="mt-4 w-full bg-green-500 text-white btn py-2 text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
