import React from "react";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor (...args) {
    super(...args);

    Modal.prototype.onOverlayClick = Modal.prototype.onOverlayClick.bind(this);
  }

  onOverlayClick () {
    if (this.props.onOverlayClick) {
      this.props.onOverlayClick();
    }
  }

  render () {
    const { open } = this.props;
    
    return open
      ? (
        <div className="common-modal">
          <div className="modal">
            {this.props.children}
          </div>
          <div className="overlay" onClick={this.onOverlayClick} />
        </div>
      )
      : null;
  }
}

Modal.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onOverlayClick: React.PropTypes.func
};

export default Modal;
