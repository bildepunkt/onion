import React, { Component } from "react";
import NewSceneModal from "./containers/NewSceneModal.js";
import Toolbar from "./containers/Toolbar.js";
import Sidebar from "./containers/Sidebar.js";
import Scene from "./containers/Scene.js";

const App = () => (
  <div className="onion">
    <Toolbar />
    <div className="columns">
      <Sidebar />
      <Scene />
    </div>
    <NewSceneModal />
  </div>
);

export default App;
