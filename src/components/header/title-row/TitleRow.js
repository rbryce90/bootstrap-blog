import React from "react";
import { Link } from "react-router-dom";
import "./title-row.css";

export default function TitleRow() {
  return (
    <div className="blog-header py-3 title-row">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <p className="text-muted">{new Date().toDateString()}</p>
        </div>
        <div className="col-4 text-center">
          <Link id="logo" className="blog-header-logo text-dark" to="/">
            Word{" "}
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <button className="btn btn-sm btn-outline-secondary">Sign in</button>
        </div>
      </div>
    </div>
  );
}
