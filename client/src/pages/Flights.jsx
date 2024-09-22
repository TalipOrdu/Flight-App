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
            className="px-4 py-2 text-blue-600 flex items-center space-x-2"
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
        <div className="w-auto mt-2 p-4 bg-blue-100 rounded-lg shadow-md">
          <p className="text-blue-600">
            Search Filters here (like date, class, etc.)
          </p>
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
              <ul className="space-y-2 text-blue-600">
                <li>Low to High</li>
                <li>High to Low</li>
                <li>Shortest</li>
                <li>Earliest</li>
                <li>Latest</li>
              </ul>
            </div>
          )}
        </div>

        <FlightCard
          airline="Delta Air Lines"
          times="7:40 AM – 9:12 AM"
          flightDuration="1h 32m"
          priceMain="$156"
          priceComfort="$204"
          priceDeltaOne="$386"
        />
        <FlightCard
          airline="American Airlines"
          times="7:00 AM – 8:52 AM"
          flightDuration="1h 52m"
          priceMain="$182"
          priceComfort="--"
          priceFirst="$400"
        />
        <FlightCard
          airline="Southwest Airlines"
          times="8:15 AM – 9:50 AM"
          flightDuration="1h 35m"
          priceMain="$225"
          priceComfort="$253"
          priceDeltaOne="1 more option"
        />
        <FlightCard
          airline="United Airlines"
          times="8:00 AM – 9:46 AM"
          flightDuration="1h 46m"
          priceMain="$183"
          priceComfort="$449"
          priceDeltaOne="$407"
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

  priceMain,
  priceComfort,
  priceDeltaOne,
}) {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md">
      {/* Left Section: Flight details */}
      <div className="flex w-2/3 items-center space-x-4">
        {/* Airline Logo */}
        <img
          src="italy.png"
          alt={`${airline} logo`}
          className="h-10 w-10 object-contain rounded-full"
        />

        {/* Flight Info */}
        <div className="grid grid-cols-3 gap-4">
          {/* Full width Flight Time */}
          <h4 className="text-lg font-bold col-span-3">7:00 AM – 9:20 AM</h4>

          {/* Column 1: Airline Name and Flight Details */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">American Airlines</p>
            <button className="text-blue-600 flex items-center text-sm">
              Flight Details
              <FaChevronDown className="ml-1 items-center justify-center w-4 h-4" />
            </button>
          </div>

          {/* Column 2: Flight Status and Duration */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">Nonstop</p>
            <p className="text-gray-500">1h 52m</p>
          </div>

          {/* Column 3: Route and Flight Code */}
          <div className="flex flex-col space-y-2 items-center justify-center p-4">
            <p className="font-semibold">SFO to LAX</p>
            <p className="text-gray-500">DL 132</p>
          </div>
        </div>
      </div>

      {/* Right Section: Pricing options */}
      <div className="flex w-1/3 items-center justify-between">
        {/* Pricing columns */}
        <div className="text-center">
          <p className="font-semibold">{priceMain}</p>
          <p className="text-gray-500">Main</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{priceComfort}</p>
          <p className="text-gray-500">Comfort+</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{priceDeltaOne}</p>
          <p className="text-gray-500">Delta One</p>
        </div>
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
  airlineLogo: PropTypes.string.isRequired, // New prop for airline logo
  departureTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
};
