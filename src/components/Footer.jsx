import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
  return (
    <footer className="font-rm bg-black">
      <div className="container text-light df aic justify-content-center">
        <div className="df aic justify-content-center fd-format">
          <p className="lg-ft">
            contact&nbsp;
            <a className="cli-item" href="https://github.com/">
              email
            </a>
          </p>
          <p className="lg-ft">
            about&nbsp;me&nbsp;
            <a className="cli-item" href="About">
              About
            </a>
          </p>
        </div>

        <div className="df aic justify-content-center fd-format">
          <p className="lg-ft">
            code&nbsp;
            <a className="cli-item" href="https://github.com/">
              github
            </a>
          </p>
          <p className="lg-ft">
            networking&nbsp;
            <a className="cli-item" href="https://github.com/">
              linkedin
            </a>
          </p>
        </div>
      </div>
      <br />
      <div className="container text-light df aic justify-content-center">
        &copy; 2022 Luis Xie
      </div>
    </footer>
  );
}

export default Footer;
