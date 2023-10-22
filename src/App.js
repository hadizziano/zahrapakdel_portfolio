import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Paintings from "./pages/Paintings/Paintings";
import About from "./pages/About/About";
import DigitalArts from "./pages/digitalarts/Digitalarts";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="paintings" element={<Paintings />} />
        <Route path="about" element={<About />} />
        <Route path="digitalarts" element={<DigitalArts />} />
      </Routes>
    </BrowserRouter>
  );
}
