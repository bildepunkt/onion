import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../common/Modal";
import { toggleNewSceneModal } from "../../actions/commonActions";
import { newSettings } from "../../actions/settingsActions";

class NewSceneModal extends Component {
  constructor (...args) {
    super(...args);

    NewSceneModal.prototype.onToggle = NewSceneModal.prototype.onToggle.bind(this);
    NewSceneModal.prototype.onConfirm = NewSceneModal.prototype.onConfirm.bind(this);
  }

  onConfirm () {
    this.props.dispatch(toggleNewSceneModal());
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
        <div>
          <div className="settings">
            <label>width<input type="text" ref="widthInput" placeholder="800" /></label>
            <label>height<input type="text" ref="heightInput" placeholder="600" /></label>
            <label>background<input type="text" ref="backgroundInput" placeholder="white" /></label>
          </div>
          <div className="confirm">
            <button onClick={this.onConfirm}>confirm</button>
            <button onClick={this.onToggle}>cancel</button>
          </div>
        </div>
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
