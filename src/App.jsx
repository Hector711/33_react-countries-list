import React from "react";
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Navbar from "./Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/countries", element: <Countries /> },
    // { path: "/country:id", element: <CountryId /> },

  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;