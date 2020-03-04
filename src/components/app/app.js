import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { mockApi, api } from "../../service";

class App extends Component {
  state = {
    hasError: false,
    service: api
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onChangeService = () => {
    this.setState(({ service }) => {
      return {
        service: api
      };
    });
  };

  render() {
    return (
      <div className="star-db-app pr-5 pl-5">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.service}>
            <Header onChangeService={this.onChangeService} />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
