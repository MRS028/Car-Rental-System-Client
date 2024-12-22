import { FaCarSide } from "react-icons/fa";
import { BsGear, BsFuelPump } from "react-icons/bs";

function CarCard({ car }) {
  return (
    <div className="max-w-sm card h-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={car.photo} // Replace with dynamic image if available
          alt={car.model}
          className="w-full"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {car.uploadDate}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 text-lg">★★★★★</span>
        </div>
        <h2 className="text-lg font-semibold">{car.model}</h2>
        <p className="text-blue-600 font-bold text-xl">${car.price}.00</p>
        <p className="text-gray-500 text-sm">/ Night</p>
        <p className="text-gray-600 text-sm mt-2">{car.description}</p>
        <hr className="my-4" />
        <div className="flex justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaCarSide className="text-blue-600" /> Seats Info
          </div>
          <div className="flex items-center gap-1">
            <BsGear className="text-blue-600" /> Automatic (if applicable)
          </div>
        </div>
        <div className="flex justify-between mt-2 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <BsFuelPump className="text-blue-600" /> Fuel Type Info
          </div>
          <div className="flex items-center gap-1">
            Features: {car.features}
          </div>
        </div>
        <button
          className={`mt-4 w-full ${
            car.availability === "Available"
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-800"
          } py-2 rounded`}
          disabled={car.availability !== "Available"}
        >
          {car.availability === "Available" ? "BOOK NOW" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default CarCard;
