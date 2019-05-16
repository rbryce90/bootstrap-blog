import React from "react";
import Header from "./components/header/Header";
import TopJumbo from "./components/top-jumbotron/TopJumbo";
import Routes from "./components/routes/Routes";
import Aside from "./components/aside/Aside";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <TopJumbo />
        <Header />
        <div className="row blog-body">
          <Routes />
          <Aside />
        </div>
      </div>
    );
  }
}

export default App;
