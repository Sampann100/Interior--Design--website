import React from "react";
import "../src/App.css";
import Navbar from "../src/Heading-Part/Navbar";
import Footer from "../src/Heading-Part/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import FetchItem from "../src/NavbarBtn/FetchItem";

function App() {

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