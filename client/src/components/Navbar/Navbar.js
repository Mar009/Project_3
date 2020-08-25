import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbartoggler"
          aria-controls="navbartoggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbartoggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                to="/members"
                className={
                  // window.location.pathname === "/" ||
                  window.location.pathname === "/members"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/members/new"
                className={
                  window.location.pathname === "/members/new"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                New
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/members/remedy"
                className={
                  window.location.pathname === "/members/remedy"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Remedy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/members/history"
                className={
                  window.location.pathname === "/members/history"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                History
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
