import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavigationBar() {
  return (
    <nav className="font-rm navbar-dark bg-black navbar navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
      <div className="container-fluid">
        <a className="navbar-brand cli-item" href="Index">
          Luix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item cli-item">
              <a className="nav-link text-light" href="Index">
                Home
              </a>
            </li>
            <li className="nav-item cli-item">
              <a className="nav-link text-light" href="Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item cli-item">
              <a className="nav-link text-light" href="Index">
                Blogs
              </a>
            </li>
            <li className="nav-item cli-item">
              <a className="nav-link text-light" href="About">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
