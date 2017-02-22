import React from "react";
import { connect } from "react-redux";
import { triggerButton } from "../../actions/fileActions";

class Toolbar extends React.Component {
  constructor (...args) {
    super(...args);

    Toolbar.prototype.onClick = Toolbar.prototype.onClick.bind(this);
  }

  onClick (e) {
    this.props.dispatch(triggerButton(e.target.id.replace("toolbar-", "")));
  }

  render () {
    return (
      <ul className="toolbar" onClick={this.onClick}>
        <li><a id="toolbar-new">new</a></li>
        <li><a id="toolbar-open">open</a></li>
        <li><a id="toolbar-save">save</a></li>
        <li><a id="toolbar-undo">undo</a></li>
        <li><a id="toolbar-redo">redo</a></li>
      </ul>
    );
  }
}

Toolbar.propTypes = {
  file: React.PropTypes.object.isRequired
};

Toolbar = connect(state => ({
  file: state.file
}))(Toolbar);

export default Toolbar;
