import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  const [padding, setPadding] = useState('py-4');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setPadding('');
      } else {
        setPadding('py-4');
      }
    });
  }, []);
  
  return (
    <>
      <nav className={`navbar navbar-dark navbar-expand-lg fixed-top ${padding}`}>
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-white fw-bold fs-2 text-uppercase"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto my-md-0 my-2 mb-lg-0">
              <li className="nav-item pe-2">
                <NavLink
                  className="nav-link text-white fw-bold text-uppercase p-2"
                  to={"about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink
                  className="nav-link text-white fw-bold text-uppercase p-2"
                  to={"portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item pe-2">
                <NavLink
                  className="nav-link text-white fw-bold text-uppercase p-2"
                  to={"contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
