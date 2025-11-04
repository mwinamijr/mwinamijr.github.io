import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Resume from "./screens/Resume";
import Services from "./screens/Services";
// import Testimonials from "./screens/Testimonials";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactScreen />} />
          {/* You can add testimonials later like this: */}
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
