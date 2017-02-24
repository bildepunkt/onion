import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../common/Modal";
import { toggleNewSceneModal } from "../../actions/commonActions";
import { newScene } from "../../actions/sceneActions";
import { newSettings } from "../../actions/settingsActions";

class NewSceneModal extends Component {
  constructor (...args) {
    super(...args);

    NewSceneModal.prototype.onToggle = NewSceneModal.prototype.onToggle.bind(this);
    NewSceneModal.prototype.onConfirm = NewSceneModal.prototype.onConfirm.bind(this);
  }

  onConfirm () {
    this.props.dispatch(toggleNewSceneModal());
    this.props.dispatch(newScene());
    this.props.dispatch(newSettings({
      width: parseInt(this.refs.widthInput.value, 10),
      height: parseInt(this.refs.heightInput.value, 10),
      background: this.refs.backgroundInput.value
    }));
  }

  onToggle () {
    this.props.dispatch(toggleNewSceneModal());
  }

  render () {
    return (
      <Modal
        open={this.props.common.newSceneModalOpen}
        onOverlayClick={this.onToggle}>
        <form onSubmit={this.onConfirm}>
          <div className="settings">
            <label>width<input type="text" ref="widthInput" placeholder="640" /></label>
            <label>height<input type="text" ref="heightInput" placeholder="480" /></label>
            <label>background<input type="text" ref="backgroundInput" placeholder="white" /></label>
          </div>
          <div className="confirm">
            <input type="submit" value="confirm" onClick={this.onConfirm} />
            <button onClick={this.onToggle}>cancel</button>
          </div>
        </form>
      </Modal>
    );
  }
}

NewSceneModal.propTypes = {
  common: React.PropTypes.object.isRequired,
};

NewSceneModal = connect(state => ({
  common: state.common
}))(NewSceneModal);

export default NewSceneModal;
