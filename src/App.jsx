import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllFonts from "./Pages/AllFonts";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import InstagramFonts from "./Pages/InstagramFonts";
import FancyFonts from "./Pages/FancyFonts";
import Zalgo from "./Pages/Zalgo";
import Glitch from "./Pages/Glitch";
import Discord from "./Pages/Discord";
import Stylish from "./Pages/Stylish";

function App() {
  return (
    <Router basename="/Font-generator/">
      <Header />
      <Routes>
        <Route path="/" element={<AllFonts/>} />
        <Route path="/instagram" element={<InstagramFonts/>} />
        <Route path="/glitch" element={<Glitch/>} />
        <Route path="/fancy" element={<FancyFonts/>} />
        <Route path="/discord" element={<Discord/>} />
        <Route path="/zalgo" element={<Zalgo/>} />
        <Route path="/stylish" element={<Stylish/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
