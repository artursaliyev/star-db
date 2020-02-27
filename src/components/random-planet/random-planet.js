import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import api from "../../service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 190000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = e => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 2;
    api.planets.get(id).then(this.onPlanetLoaded);
  };

  render() {
    console.log("reder(random-planet)");
    const { planet, loading, error } = this.state;

    const hasData = !(error || loading);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
