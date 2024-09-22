import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaHotel,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

export default function FlightCard() {
  return (
    <div className="flex min-h-screen bg-gray-200 shadow-md p-6 pt-0 space-x-6 space-y-4">
      {/* Main Flight Card Section */}
      <div className="max-w-5xl h-[243px] relative bg-white shadow-md rounded-lg rounded-bl-none p-6 pb-0 pr-0 ">
        {/* Flight Information Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Milano - Madrid</h2>
        </div>

        {/* Flight Details */}
        <div className="grid grid-cols-3 gap-4 items-center pr-8">
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

          {/* Divider Line with Flight Icon */}
          <div className="flex justify-center items-center -mt-4">
            <div className="text-center">
              <img
                src="/italy.png"
                alt="Alitalia"
                className="mx-auto w-16 h-16 bg-white object-contain"
              />
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
          <button className="w-36 h-16 text-lg bg-purple-600 text-white py-3 px-6 rounded-tl-lg rounded-br-lg hover:bg-purple-700 focus:outline-none">
            Book Flight
          </button>
        </div>

        {/* Check Details Button */}
        <button className="absolute left-0 text-purple-600 py-3 px-3 rounded-bl-lg rounded-br-lg bg-gray-300 hover:bg-purple-200 underline">
          Check the details
        </button>

        {/* Second Card */}
        <div className="absolute left-0 pl-6 py-7 pb-0 mt-16 bg-white shadow-md rounded-lg rounded-bl-none">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Milano - Madrid</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center pr-8">
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

            {/* Divider Line with Flight Icon */}
            <div className="flex justify-center items-center -mt-4">
              <div className="text-center">
                <img
                  src="/italy.png"
                  alt="Alitalia"
                  className="mx-auto w-16 h-16 bg-white object-contain"
                />
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
          <div className="flex justify-between items-end mt-2">
            <div className="pb-2">
              <p className="text-xl font-semibold text-purple-600">
                Price: $200
              </p>
              <p className="text-gray-600">Round Trip</p>
            </div>
            <button className="w-36 h-16 text-lg bg-purple-600 text-white py-3 px-6 rounded-tl-lg rounded-br-lg hover:bg-purple-700 focus:outline-none">
              Book Flight
            </button>
          </div>

          {/* Check Details Button */}
          <button className="absolute left-0  text-purple-600 py-3 px-3 rounded-bl-lg rounded-br-lg bg-gray-300 hover:bg-purple-200 underline">
            Check the details
          </button>
        </div>
      </div>

      {/* Right Column - Sidebar */}
      <div className="w-[460px] bg-gray-200 p-4  rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Sort by:</h3>
        <div className="mb-4">
          <select className="w-full p-2 border rounded">
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold">Arrival Time</h4>
          <label className="block">
            <input
              type="radio"
              name="arrival-time"
              className="mr-2"
              defaultChecked
            />
            5:00 AM - 11:59 AM
          </label>
          <label className="block">
            <input type="radio" name="arrival-time" className="mr-2" />
            12:00 PM - 5:59 PM
          </label>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold">Stops</h4>
          <label className="block">
            <input type="radio" name="stops" className="mr-2" defaultChecked />
            Nonstop
            <span className="float-right">$230</span>
          </label>
          <label className="block">
            <input type="radio" name="stops" className="mr-2" />1 Stop
            <span className="float-right">$230</span>
          </label>
          <label className="block">
            <input type="radio" name="stops" className="mr-2" />
            2+ Stops
            <span className="float-right">$230</span>
          </label>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold">Airlines Included</h4>
          <label className="block" >
            <input
            
              type="radio"
              name="airlines"
              className="mr-2"
              defaultChecked
            />
            Alitalia
            <span className="float-right">$230</span>
          </label>
          <label className="block">
            <input type="radio" name="airlines" className="mr-2" />
            Lufthansa
            <span className="float-right">$230</span>
          </label>
          <label className="block">
            <input type="radio" name="airlines" className="mr-2" />
            Air France
            <span className="float-right">$230</span>
          </label>
          <label className="block">
            <input type="radio" name="airlines" className="mr-2" />
            Brussels Airlines
            <span className="float-right">$230</span>
          </label>
          <label className="block opacity-80">
            <input type="radio" name="airlines" className="mr-2" />
            Air Italy
            <span className="float-right">$230</span>
          </label>
          <label className="block opacity-50">
            <input type="radio" name="airlines" className="mr-2" />
            Siberia
            <span className="float-right">$230</span>
          </label>
        </div>
      </div>

      {/* Car Rentals Section */}
      <div className="flex flex-col space-y-6">
        {/* First Car Rental Section */}
        <div
          className="w-[293px] h-60 relative bg-cover bg-center rounded-lg shadow-md p-6"
          style={{ backgroundImage: 'url("./hotel.png")' }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative flex flex-col items-start justify-end h-full p-2 text-left z-10">
            <FaHotel className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-white">Hotels</h2>
          </div>
        </div>

        {/* Second Car Rental Section */}
        <div
          className="w-[293px] h-60 relative bg-cover bg-center rounded-lg shadow-md p-6"
          style={{ backgroundImage: 'url("./travel.png")' }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative flex flex-col items-start justify-end h-full p-2 text-left z-10">
            <FaUmbrellaBeach className="text-white text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-white">Travel Packages</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
