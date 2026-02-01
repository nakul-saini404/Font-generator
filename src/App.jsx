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
import Big from "./Pages/Big";
import Bold from "./Pages/Bold";
import Cool from "./Pages/Cool";
import CreepyFonts from "./Pages/Creepy";

function App() {
  return (
    <Router basename="/Font-generator/">
      <Header />
      <Routes>
        <Route path="/" element={<AllFonts/>} />
        <Route path="/instagram" element={<InstagramFonts/>} />
        <Route path="/glitch" element={<Glitch/>} />
        <Route path="/creepy" element={<CreepyFonts/>} />
        <Route path="/fancy" element={<FancyFonts/>} />
        <Route path="/discord" element={<Discord/>} />
        <Route path="/zalgo" element={<Zalgo/>} />
        <Route path="/stylish" element={<Stylish/>} />
        <Route path="/big" element={<Big/>} />
        <Route path="/bold" element={<Bold/>} />
        <Route path="/cool" element={<Cool/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
