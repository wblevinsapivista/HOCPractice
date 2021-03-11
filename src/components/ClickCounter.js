import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount} type="button">
        Clicked {count} Times
      </button>
    );
  }
}

export default UpdatedComponent(ClickCounter);
