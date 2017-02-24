import React from "react";
import { connect } from "react-redux";
import { toggleNewSceneModal } from "../../actions/commonActions";

class Toolbar extends React.Component {
  constructor (...args) {
    super(...args);

    Toolbar.prototype.onClick = Toolbar.prototype.onClick.bind(this);
  }

  onClick (e) {
    const button = e.target.id.replace("toolbar-", "");
    
    switch (button) {
      case "new":
        this.props.dispatch(toggleNewSceneModal());
        break;
    }
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

Toolbar = connect()(Toolbar);

export default Toolbar;
