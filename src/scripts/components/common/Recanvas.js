import React, { Component } from "react";

class Recanvas extends Component {
  constructor (...args) {
    super(...args);

    Recanvas.prototype.executeAction = Recanvas.prototype.executeAction.bind(this);
    Recanvas.prototype.executeStack = Recanvas.prototype.executeStack.bind(this);
  }

  executeStack (stack) {
    const { props } = this;
    this.context.clearRect(0, 0, props.width, props.height);

    for (const action of stack) {
      if (Array.isArray(action)) {
        this.context.save();
        for (const groupAction of action) {
          this.executeAction(groupAction);
        }
        this.context.restore();
      } else {
        this.context.save();
        this.executeAction(action);
        this.context.restore();
      }
    }
  }

  executeAction (action) {
    if (action.key && action.val) {
      this.context[action.key] = action.val;
    } else if (action.fn) {
      this.context[action.fn](...action.args);
    } else {
      throw new Error(`stack objects must contain either "key" & "val" properties 
                       or "fn" with optional "args" property.`);
    }
  }

  componentDidMount () {
    this.context = this.refs.canvas.getContext("2d");
    this.executeStack(this.props.stack);
  }

  componentWillReceiveProps (nextProps) {
    this.context = this.refs.canvas.getContext("2d");
    this.executeStack(nextProps.stack);
  }

  render () {
    const { props } = this;

    return (
      <canvas ref="canvas" style={props.style} width={props.width} height={props.height} />
    );
  }
}

Recanvas.defaultProps = {
  height: 600,
  style: {},
  width: 800
};

Recanvas.propTypes = {
  height: React.PropTypes.number,
  stack: React.PropTypes.array.isRequired,
  style: React.PropTypes.object,
  width: React.PropTypes.number
}

export default Recanvas;
