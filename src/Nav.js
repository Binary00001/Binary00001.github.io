import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a class="navbar-brand text-danger" href="/">
          ANDREW RIGGS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                about
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/projects" className="nav-link">
                projects
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/links" className="nav-link">
                links
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
