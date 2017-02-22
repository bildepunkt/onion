import React from "react";
import { connect } from "react-redux";
import Modal from "./common/Modal.js";
import Toolbar from "./Toolbar.js";
import Sidebar from "./Sidebar.js";
import Draw from "./Draw.js";

class App extends React.Component {
  render () {
    return (
      <div className="onion">
        <Toolbar />
        <div className="columns">
          <Sidebar />
          <Draw />
        </div>
        <Modal open={this.props.common.newSceneModalOpen}>
          <div>
            <button>confirm</button>
            <button>cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}

App = connect(state => ({
  common: state.common
}))(App);

export default App;
