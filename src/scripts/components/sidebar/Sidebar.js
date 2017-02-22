import React from "react";
import { connect } from "react-redux";

let Sidebar = () => {
  return (
    <div className="sidebar">Sidebar</div>
  );
};

Sidebar = connect()(Sidebar);

export default Sidebar;
