import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">
              Read this Daily{" "}
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
        <hr />
        <div class="nav-scroller py-1 mb-2">
          <nav class="nav d-flex justify-content-between">
            <a class="p-2 text-muted" href="#">
              Politics
            </a>
            <a class="p-2 text-muted" href="#">
              Technology
            </a>

            <a class="p-2 text-muted" href="#">
              Culture
            </a>
            <a class="p-2 text-muted" href="#">
              Design
            </a>
            <a class="p-2 text-muted" href="#">
              Style
            </a>
            <a class="p-2 text-muted" href="#">
              Adventures
            </a>
          </nav>

          <hr />
        </div>
      </header>
    );
  }
}

export default Header;
