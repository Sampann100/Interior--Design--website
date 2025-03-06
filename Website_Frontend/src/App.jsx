import React from "react";
import "./App.css";
import Navbar from "./Heading-Part/Navbar";
import Footer from "./Heading-Part/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import FetchItem from "./NavbarBtn/FetchItem";

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <Navbar />
      <FetchItem />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
