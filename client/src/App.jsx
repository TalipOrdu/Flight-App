import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FlightCard from "./components/FlightCard";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
      <FlightCard/>
    </BrowserRouter>
  );
}
