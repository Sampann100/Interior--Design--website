import style from "./Navbar.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHelpOutline } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Navbar() {
  let bagItemLength = useSelector((state) => state.bagItem);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 my-1">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className="navbar-brand ms-3">
              <img className={style.headingImage} src="Marc.png" alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="navbar navbar-expand-lg bg-body-tertiary"
            style={{ marginLeft: "0px" }}
          >
            <div className="container-fluid">
              <ul
                className="nav col-12 mb-2 justify-content-center mb-md-0"
                style={{ display: "flex", gap: "15px" }}
              >
                <li>
                  <Link to="/Home" className={`px-4 ${style.navStyle}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className={`px-4 ${style.navStyle}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Service" className={`px-4 ${style.navStyle}`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className={`px-4 ${style.navStyle}`}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/addProduct" className={`px-4 ${style.navStyle}`}>
                    Add Product
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="d-flex align-items-center gap-3 me-3">
            {/* Login Button */}
            <Link to="/Login">
              <button type="button" className={`${style.LoginBtn}`}>
                Login
              </button>
            </Link>
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="btn btn-light position-relative d-flex align-items-center ms-2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <IoBagAdd size={30} color="black" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {bagItemLength.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
