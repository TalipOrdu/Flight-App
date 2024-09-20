import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

export default function FlightCard() {
  return (
    <div className="bg-gray-200 shadow-md p-6">
      <div className="max-w-2xl relative bg-white shadow-md rounded-lg rounded-bl-none p-6 pb-0 pr-0">
        {/* Flight Information Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Milano - Madrid</h2>
        </div>

        {/* Flight Details */}
        <div className="grid grid-cols-3 gap-4 items- pr-8 items-center">
          {/* Departure Information */}
          <div className="text-left">
            <div className="flex items-end space-x-2 text-gray-600">
              <FaPlaneDeparture className="text-xl" />
              <span>Departure</span>
            </div>
            <p className="text-lg font-bold">7:30 AM</p>
            <div className="h-[2px] bg-gray-300 w-20 font-bold ml-32"></div>
            <p className="text-gray-500">Airport: MXP</p>
          </div>

          {/* Divider Line */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              {/* Center and resize the image */}
              <img
                src="/italy.png"
                alt="Alitalia"
                className="mx-auto w-16 h-16 bg-white object-contain"
              />
              {/* Plane Icon */}
              <IoIosAirplane className="w-8 h-8 text-purple-700 mx-auto" />
              <p className="text-gray-600">2h 25m (Nonstop)</p>
            </div>
          </div>

          {/* Arrival Information */}
          <div className="text-right">
            <div className="flex items-center space-x-2 justify-end text-gray-600">
              <span>Arrival</span>
              <FaPlaneArrival className="text-xl" />
            </div>
            <p className="text-lg font-bold">9:55 AM</p>
            <div className="h-[2px] bg-gray-300 w-20 font-bold "></div>
            <p className="text-gray-500">Airport: MAD</p>
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex justify-between items-end mt-2">
          <div className="pb-2">
            <p className="text-xl font-semibold text-purple-600">Price: $200</p>
            <p className="text-gray-600">Round Trip</p>
          </div>
          <button className="w-36 h-20 text-lg bg-purple-600 text-white py-3 px-6 rounded-tl-lg rounded-br-lg hover:bg-purple-700 focus:outline-none">
            Book Flight
          </button>
        </div>

        {/* Check Details Button */}
      </div>
      <button className=" bottom-4 left-5 text-purple-600 py-3 px-3 rounded-bl-lg rounded-br-lg bg-gray-300 hover:bg-purple-200 underline">
        Check the details
      </button>
    </div>
  );
}
