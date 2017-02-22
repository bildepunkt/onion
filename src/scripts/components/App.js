import React from "react";
import Toolbar from "./toolbar/Toolbar.js";
import Sidebar from "./sidebar/Sidebar.js";
import Draw from "./draw/Draw.js";

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
