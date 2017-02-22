import React from "react";
import { connect } from "react-redux";

let Draw = () => {
  return (
    <div className="draw">Draw</div>
  );
};

Draw = connect()(Draw);

export default Draw;
