import React from "react";
import { connect } from "react-redux";

let Toolbar = () => {
  return (
    <div className="toolbar">Toolbar</div>
  );
};

Toolbar = connect()(Toolbar);

export default Toolbar;
