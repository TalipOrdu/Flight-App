import { useState } from "react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { FaCar } from "react-icons/fa";

export default function Home() {
  const [tripType, setTripType] = useState("round");
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-gray-200 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Book Your Flight Section */}
        <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <img src="/plane.jpg" alt="Plane Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-purple-700">
                Book Your Flight
              </h1>
            </div>

            {/* Round Trip & One Way Buttons */}
            <div className="flex space-x-0">
              <button
                onClick={() => setTripType("round")}
                className={`px-4 py-2 rounded-l-full border ${
                  tripType === "round"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-600"
                }`}
                aria-pressed={tripType === "round"}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("one-way")}
                className={`px-4 py-2 rounded-r-full border ${
                  tripType === "one-way"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-600"
                }`}
                aria-pressed={tripType === "one-way"}
              >
                One Way
              </button>
            </div>
          </div>

          {/* Flight Details Form */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-1 mb-4 pr-4">
            {/* Departure and Arrival Cities */}
            <div className="relative">
              <label htmlFor="departure" className="block text-gray-700">
                Departure
              </label>
              <input
                id="departure"
                type="text"
                className="w-full p-2 border rounded-tl-2xl rounded-bl-2xl focus:outline-none focus:border-purple-500 pl-8"
                required
              />
              <MdFlightTakeoff className="text-purple-600 absolute left-3 top-2/3 transform -translate-y-1/2" />
            </div>
            <div className="relative">
              <label htmlFor="destination" className="block text-gray-700">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                className="w-full p-2 border rounded-tr-2xl rounded-br-2xl focus:outline-none focus:border-purple-500 pl-8"
                required
              />
              <MdFlightLand className="text-purple-600 absolute left-3 top-2/3 transform -translate-y-1/2" />
            </div>
            <div className="relative pl-4">
              <label htmlFor="departure-date" className="block text-gray-700">
                Departure Date
              </label>
              <input
                id="departure-date"
                type="date"
                className="w-full p-2 border rounded-tl-2xl rounded-bl-2xl focus:outline-none focus:border-purple-500 pl-3 no-placeholder" // Add no-placeholder class
                min={today} // Prevent selecting past dates
                required
              />
            </div>

            {/* Return Date (if round trip) */}
            {tripType === "round" && (
              <div className="relative">
                <label htmlFor="return-date" className="block text-gray-700">
                  Return Date
                </label>
                <input
                  id="return-date"
                  type="date"
                  className="w-full  p-2 border rounded-tr-2xl rounded-br-2xl focus:outline-none focus:border-purple-500 pl-4"
                  min={today} // Prevent selecting past dates
                />
              </div>
            )}
          </div>

          {/* Show Flights Button */}
          <div className="flex justify-start">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 focus:outline-none">
              Show Flights
            </button>
          </div>
        </div>

        {/* Car Rentals Section */}
        <div
          className="relative bg-cover bg-center rounded-lg shadow-md p-6 md:col-span-1"
          style={{ backgroundImage: 'url("./car.jpg")' }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative flex flex-col items-start justify-end h-full p-2 text-left z-10">
            <FaCar className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-white">Car Rentals</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
