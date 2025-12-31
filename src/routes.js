import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Poojas from "./Pages/Poojas";
import SandhiShantiPage from "./Pages/SandhiShantiPage";
import SarpaDoshaPage from "./Pages/SarpaDoshaPage";
import NarayanaBali from "./Pages/NarayanaBali";
import TripindiShraddha from "./Pages/TripindiShraddha";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/poojas", element: <Poojas /> },

  // ✅ Pooja detail pages
  { path: "/narayana-bali", element: <NarayanaBali /> },
  { path: "/tripindi-shraddha", element: <TripindiShraddha /> },
  { path: "/sandhi-shanti", element: <SandhiShantiPage /> },
  { path: "/sarpa-dosha", element: <SarpaDoshaPage /> },
];

export default routes;

