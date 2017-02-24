import React, { Component } from "react";
import { connect } from "react-redux";
import { newScene, setCanvasHasInitialized } from "../../actions/sceneActions";
import { newSettings } from "../../actions/settingsActions";
import { stretchToFit } from "../../utils";

let context;

class Scene extends Component {
  constructor (...args) {
    super(...args);

    Scene.prototype.onResizeWindow = Scene.prototype.onResizeWindow.bind(this);
  }

  onResizeWindow () {
    const { settings } = this.props;
    const sceneBoundingRect = this.refs.scene.getBoundingClientRect();
    const canvas = this.refs.canvas;
    const dimensions = stretchToFit(
        settings.width, settings.height, sceneBoundingRect.width, sceneBoundingRect.height
    );

    canvas.style.left = `${dimensions.left}px`;
    canvas.style.height = `${dimensions.height}px`;
    canvas.style.top = `${dimensions.top}px`;
    canvas.style.width = `${dimensions.width}px`;

    this.forceUpdate();
  }

  componentWillReceiveProps (nextProps) {
    const { scene, settings } = nextProps;

    if (!scene.canvasHasInitialized) {
        context = this.refs.canvas.getContext("2d");
        this.onResizeWindow();
        nextProps.dispatch(setCanvasHasInitialized(true));
    }

    context.fillStyle = settings.background;
    context.fillRect(0, 0, settings.width, settings.height);
  }

  componentWillMount () {
    this.props.dispatch(newScene());
    this.props.dispatch(newSettings());
    window.addEventListener("resize", this.onResizeWindow, false);
  }

  render () {
    const { scene, settings } = this.props;

    return (
      <div ref="scene" className="scene">
        <canvas ref="canvas" width={settings.width} height={settings.height} />
      </div>
    );
  }
}

Scene = connect(state => ({
  scene: state.scene,
  settings: state.settings
}))(Scene);

export default Scene;
