import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllFonts from "./Pages/AllFonts";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import InstagramFonts from "./Pages/InstagramFonts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllFonts/>} />
        <Route path="/instagram" element={<InstagramFonts/>} />
        <Route path="/glitch" element={<h2>Glitch Fonts</h2>} />
        <Route path="/fancy" element={<h2>Fancy Fonts</h2>} />
        <Route path="/discord" element={<h2>Discord Fonts</h2>} />
        <Route path="/zalgo" element={<h2>Zalgo Fonts</h2>} />
        <Route path="/stylish" element={<h2>Stylish Fonts</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
