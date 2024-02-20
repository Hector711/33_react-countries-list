import React from "react";
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Navbar from "./Components/Navbar";
import Search from "./pages/Search";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/countries", element: <Countries /> },
    { path: "/search", element: <Search /> },
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