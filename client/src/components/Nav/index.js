import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row">
      <div className="mainlinks px-1">
        <h1 className="brand">
          <Link to="/">VEGEMART</Link>
        </h1>

        <nav>{showNavigation()}</nav>
      </div>

      {/* <div className="sections">
        <ul className="labels">
          <il>
            <Link to="/freshproduce">
              fresh produce
            </Link>
          </il>
          <il>
            <Link to="/grains">
              grains & legumes
            </Link>
          </il>
          <il>
            <Link to="/dairy">
              dairy alternatives
            </Link>
          </il>
          <il>
            <Link to="/meat">
              meat alternatives
            </Link>
          </il>
        </ul>
      </div> */}
    </header>
  );
}

export default Nav;
