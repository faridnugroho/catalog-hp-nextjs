import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <ul className="navbar-nav my-2 gap-5">
              <li className="nav-item">
                <Link href={"/"} className="text-decoration-none text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={"/product"}
                  className="text-decoration-none text-dark"
                >
                  Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
