import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flights from "./pages/Flights";
import Home from "./pages/Home";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
}
