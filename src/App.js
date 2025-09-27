import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
import About from "./Pages/About";



function App(){
  return(
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
      {routes.map((r,i)=>(
        <Route key={i} path={r.path} element={r.element}/>
        
      ))}
      <Route path="/about" element={<About />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;