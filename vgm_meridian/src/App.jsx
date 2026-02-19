import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Thulir from "./pages/Thulir";
import Mentorix from "./pages/Mentorix";
import Dolphin from "./pages/Dolphin";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/branches/thulir" element={<Thulir />} />
        <Route path="/branches/mentorix" element={<Mentorix />} />
        <Route path="/branches/dolphin" element={<Dolphin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
