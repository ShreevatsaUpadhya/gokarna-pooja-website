// import {BrowserRoute as Router,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Poojas from "./Pages/Poojas";
import SandhiShantiPage from "./Pages/SandhiShantiPage";
import SarpaDoshaPage from "./Pages/SarpaDoshaPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/poojas", element: <Poojas /> },
  //  { path: "/about", element: <About /> },
  { path: "/sandhi-shanti", element: <SandhiShantiPage /> },
  { path: "/sarpa-dosha", element: <SarpaDoshaPage /> },
];

export default routes;
