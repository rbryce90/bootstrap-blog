import React, { Component } from "react";
import NavBar from "./nav/NavBar";

import TitleRow from "./title-row/TitleRow";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <TitleRow />
        <NavBar />
      </header>
    );
  }
}

export default Header;
