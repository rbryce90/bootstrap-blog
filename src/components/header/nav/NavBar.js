import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm d-flex justify-content-around">
        <Link className="nav-link text-muted " to="/politics">
          Politics
        </Link>
        <Link className="nav-link text-muted " to="/religion">
          Religion
        </Link>
        <Link className="nav-link text-muted " to="/life">
          Life
        </Link>
        <Link className="nav-link text-muted " to="/misc">
          Misc
        </Link>
        <Link className="nav-link text-muted " to="/videos">
          Videos
        </Link>
        <Link className="nav-link text-muted nav-items" to="contributors">
          Contributors
        </Link>
      </nav>
    );
  }
}

export default NavBar;
