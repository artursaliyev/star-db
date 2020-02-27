import React, { Component } from "react";

export default class ErrorButton extends Component {
  state = {
    renderError: false
  };

  render() {
    console.log("renderError");
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}
      >
        Trow error
      </button>
    );
  }
}
