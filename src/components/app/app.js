import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/index";
import ErrorIndicator from "../error-indicator/index";
import PeoplePage from "../people-page";

class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="star-db-app pr-5 pl-5">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>

          <ErrorButton />
        </div>
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
