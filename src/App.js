import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Paintings from "./pages/Paintings/Paintings";
import About from "./pages/About/About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="paintings" element={<Paintings />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
