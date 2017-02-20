import React from "react";
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";
import Draw from "./draw";

const App = () => (
  <div className="onion">
    <Toolbar />
    <div className="columns">
      <Sidebar />
      <Draw />
    </div>
  </div>
);

export default App;
