import React, { Component } from "react";
import { connect } from "react-redux";
import Recanvas from "../common/Recanvas";
import { updateCanvasStyle } from "../../actions/sceneActions";
import { stretchToFit } from "../../utils";

class Scene extends Component {
  constructor (...args) {
    super(...args);

    Scene.prototype.onResizeWindow = Scene.prototype.onResizeWindow.bind(this);
  }

  onResizeWindow () {
    const { settings } = this.props;
    const sceneBoundingRect = this.refs.scene.getBoundingClientRect();

    this.props.dispatch(updateCanvasStyle(
      stretchToFit(settings.width, settings.height, sceneBoundingRect.width, sceneBoundingRect.height)
    ));
  }

  componentWillMount () {
    window.addEventListener("resize", this.onResizeWindow, false);
  }

  render () {
    const { scene, settings } = this.props;

    return (
      <div ref="scene" className="scene">
        <Recanvas
          ref="recanvas"
          style={scene.style}
          stack={settings.stack}
          width={settings.width}
          height={settings.height} />
      </div>
    );
  }
}

Scene = connect(state => ({
  scene: state.scene,
  settings: state.settings
}))(Scene);

export default Scene;
