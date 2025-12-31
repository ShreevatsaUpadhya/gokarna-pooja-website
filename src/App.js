import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";
import About from "./Pages/About";


function App() {
  return (
    <Router>
      {/* Scroll resets on navigation */}
      <ScrollToTop />

      {/* Common header */}
      <Navbar />

      {/* Main routes */}
      <Routes>
        {/* Routes from routes.js (Home, Poojas, Contact, etc.) */}
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}

        {/* Explicit About route */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Common footer */}
      <Footer />
    </Router>
  );
}

export default App;