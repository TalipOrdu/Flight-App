import { FaStar, FaRegStar, FaChevronDown } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Flights() {
  const [searchFiltersVisible, setSearchFiltersVisible] = useState(false);
  const [sortOptionsVisible, setSortOptionsVisible] = useState(false);

  const toggleSearchFilters = () => {
    setSearchFiltersVisible(!searchFiltersVisible);
  };
  const toggleSortOptions = () => {
    setSortOptionsVisible(!sortOptionsVisible);
  };

  return (
    <div className=" rounded-lg shadow-md mb-6 max-h-screen">
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4 ml-4">
          <button className="px-4 py-2 shadow-md border hover:bg-gray-200 rounded-md">
            Times
          </button>
          <button className="px-4 py-1 shadow-md border hover:bg-gray-200 rounded-md">
            Stops
          </button>
          <button className="px-4 py-1 shadow-md border hover:bg-gray-200 rounded-md">
            Airlines
          </button>
          <button className="px-4 py-2 shadow-md border hover:bg-gray-200 rounded-md">
            Airports
          </button>
          <button className="px-4 py-2 shadow-md border hover:bg-gray-200 rounded-md">
            Amenities
          </button>

          <button
            onClick={toggleSearchFilters}
            className="relative px-4 py-2 text-blue-600 flex items-center space-x-2"
          >
            Edit Search
            <FaChevronDown className="ml-1 items-center justify-center w-4 h-4" />
          </button>
        </div>
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col space-y-2">
            <StarRating value={2} max={3} />
            <StarRating value={0} max={3} />
          </div>
          <div className="h-10 bg-gray-300 w-[2px] font-bold"></div>
          <div className="flex flex-col space-y-2 ">
            <StarRating value={3} max={3} />
            <StarRating value={0} max={3} />
          </div>
          <div className="h-10 bg-gray-300 w-[2px] font-bold"></div>
          <div className="flex flex-col space-y-2">
            <StarRating value={3} max={3} />
            <StarRating value={1} max={3} />
          </div>
          <div className="h-10 bg-gray-300 w-[2px] font-bold"></div>
          <div className="flex flex-col space-y-2">
            <StarRating value={3} max={3} />
            <StarRating value={2} max={3} />
          </div>
          <div className="h-10 bg-gray-300 w-[2px] font-bold"></div>
          <div className="flex flex-col space-y-2 pr-16">
            <StarRating value={3} max={3} />
            <StarRating value={3} max={3} />
          </div>
        </div>
      </div>
      {searchFiltersVisible && (
        <div className="absolute left-[40%] transform -translate-x-1/2 w-32 bg-blue-100 rounded-lg shadow-md">
          <div className="space-y-2">
            <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
              Latest
            </button>
            <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
              Oldest
            </button>
          </div>
        </div>
      )}

      {/* Flight List */}
      <div className="space-y-4 bg-gray-200 min-h-screen p-10 pt-4">
        {/* Sort By Section */}
        <div className="p-4 mb-4 rounded-lg">
          <div className="flex justify-between items-center">
            {/* Left section: Sort by button */}
            <div className="flex items-center space-x-2">
              <p className="">Sort by:</p>
              <button
                onClick={toggleSortOptions}
                className="flex items-center py-2 bg-gray-200 font-bold"
              >
                Recommended
                <FaChevronDown className="ml-1 items-center justify-center w-4 h-4" />
              </button>
            </div>

            {/* Right section: Avg. Fare */}
            <div className="flex items-center text-right space-x-2">
              <IoIosInformationCircleOutline
                size={27}
                className="font-bold text-blue-600"
              />
              <p className="text-gray-700">
                Avg. Fare: <span className="font-bold">100$</span>{" "}
              </p>
            </div>
          </div>
          {sortOptionsVisible && (
            <div className="w-36 p-2 ml-[70px] pb-0 bg-blue-100 rounded-lg shadow-md">
              <div className="space-y-2 text-blue-600">
                <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
                  Low to High
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
                  High to Low
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
                  Shortest
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
                  Earliest
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-blue-200">
                  Latest
                </button>
              </div>
            </div>
          )}
        </div>

        <FlightCard
          airline="Delta Air Lines"
          times="7:40 AM – 9:12 AM"
          flightDuration="1h 32m"
          priceMain="$156"
          priceComfort="$204"
          priceDeltaOne=""
          priceEconomy="$120"
        />
        <FlightCard
          airline="American Airlines"
          times="7:00 AM – 8:52 AM"
          flightDuration="1h 52m"
          priceMain="$182"
          priceComfort="$110"
          priceFirst="$400"
        />
        <FlightCard
          airline="Southwest Airlines"
          times="8:15 AM – 9:50 AM"
          flightDuration="1h 35m"
          priceMain="$225"
          priceComfort="$253"
          priceDeltaOne=""
        />
        <FlightCard
          airline="United Airlines"
          times="8:00 AM – 9:46 AM"
          flightDuration="1h 46m"
          priceMain="$183"
          priceComfort="$449"
          priceDeltaOne="$407"
          priceEconomy="$120"
        />
      </div>
    </div>
  );
}
function StarRating({ value, max }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <span key={i} className={`star ${i <= value ? "filled" : ""}`}>
        {i <= value ? <FaStar /> : <FaRegStar />}
      </span>
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
}
function FlightCard({
  airline,
  times,
  flightDuration,
  priceMain,
  priceComfort,
  priceDeltaOne,
  priceFirst,
  priceEconomy,
}) {
  const renderPriceCard = (price, label) => (
    <div
      className={`text-center border rounded-md w-36 h-32 hover:bg-gray-200 p-4 ${
        !price ? "bg-gray-200" : ""
      }`}
    >
      <p className="font-bold text-lg mb-6">{price || "---"}</p>
      <p className="text-gray-500">{label || "---"}</p>
    </div>
  );

  return (
    <div className="flex p-4 pt-0 bg-white rounded-lg shadow-md">
      {/* Left Section: Flight details */}
      <div className="flex w-[55%] items-start pt-4 space-x-4">
        {/* Airline Logo */}
        <img
          src="italy.png"
          alt={`${airline} logo`}
          className="h-11 w-11 object-contain rounded-full shadow-md border"
        />

        {/* Flight Info */}
        <div className="grid grid-cols-3 gap-4">
          {/* Full width Flight Time */}
          <h4 className="text-xl font-semibold col-span-3 mt-2 ml-4">
            {times}
          </h4>

          {/* Column 1: Airline Name and Flight Details */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">{airline}</p>
            <button className="text-blue-600 flex items-center text-sm">
              Flight Details
              <FaChevronDown className="ml-1 items-center justify-center w-4 h-4" />
            </button>
          </div>

          {/* Column 2: Flight Status and Duration */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">Nonstop</p>
            <p className="text-gray-500">{flightDuration}</p>
          </div>

          {/* Column 3: Route and Flight Code */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">SFO to LAX</p>
            <p className="text-gray-500">DL 132</p>
          </div>
        </div>
      </div>

      {/* Right Section: Pricing options */}
      <div className="flex w-[45%] p-6 space-x-4 items-center justify-between">
        {/* Pricing columns */}
        {renderPriceCard(priceMain, "Main")}
        {renderPriceCard(priceComfort, "Comfort+")}
        {renderPriceCard(priceDeltaOne, "Delta One")}
        {renderPriceCard(priceFirst, "First")}
        {renderPriceCard(priceEconomy, "Economy")}
      </div>
    </div>
  );
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
FlightCard.propTypes = {
  airline: PropTypes.string.isRequired,
  times: PropTypes.string.isRequired,
  flightDuration: PropTypes.string.isRequired,
  priceMain: PropTypes.string.isRequired,
  priceComfort: PropTypes.string.isRequired,
  priceDeltaOne: PropTypes.string.isRequired,
  flightNumber: PropTypes.number.isRequired,
  flightRoute: PropTypes.string.isRequired,
  airlineLogo: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  priceFirst: PropTypes.string.isRequired,
  priceEconomy: PropTypes.string.isRequired,
};
