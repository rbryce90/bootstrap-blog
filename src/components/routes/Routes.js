import React from "react";
import { Route } from "react-router-dom";
import Home from "./home/Home";
import Adventures from "./adventures/Adventure";
import Politics from "./politics/Politics";
import Religion from "./religion/Religion";
import Misc from "./misc/Misc";
import Contributors from "./contributors/Contributors";
import "./routes.css";

export default function Routes() {
  return (
    <div className="routes col-sm-8">
      <Route exact path="/" component={Home} />
      <Route path="/politics" component={Politics} />
      <Route path="/religion" component={Religion} />
      <Route path="/adventures" component={Adventures} />
      <Route path="/misc" component={Misc} />
      <Route path="/contributors" component={Contributors} />
    </div>
  );
}
