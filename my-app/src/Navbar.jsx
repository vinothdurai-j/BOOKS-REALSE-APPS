import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is imported

const Navbar = () => {
  const location = useLocation();

  // Navbar items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Available Books", path: "/available-books" },
    { name: "Whitelist", path: "/whitelist" },
    { name: "Add to Whitelist", path: "/add-to-whitelist" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto aligns items to the right */}
            {navItems.map(({ name, path }, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${location.pathname === path ? "active" : ""}`}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
