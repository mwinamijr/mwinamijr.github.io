import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import Resume from "./screens/Resume";
import Services from "./screens/Services";
import Projects from "./screens/Projects";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <main className="min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
