import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from "../pages";
import { mockApi, api } from "../../service";
import { StarshipDetails } from "../sw-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    hasError: false,
    service: api,
    isLoggedIn: false
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

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="star-db-app pr-5 pl-5">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.service}>
            <Router>
              <Header onChangeService={this.onChangeService} />
              <RandomPlanet />
              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to Star-DB</h2>}
                  exact
                />
                <Route path="/people/:id?" component={PeoplePage} exact />
                <Route path="/planets" component={PlanetsPage} exact />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  )}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Route render={() => <h1>Page not found!!!</h1>} />
              </Switch>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
