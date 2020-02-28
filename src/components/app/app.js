import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button/index";
import ErrorIndicator from "../error-indicator/index";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import api from "../../service";
import Row from "../row";
import { Record } from "../item-details/item-details";

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

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={api.persons.get}
        getImageUrl={api.persons.imageUrl}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={api.starships.get}
        getImageUrl={api.starships.imageUrl}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="star-db-app pr-5 pl-5">
        <Header />

        <ItemList propsOnItemSelected={() => {}} getData={api.persons.all}>
          {i => `${i.name} (${i.birthYear})`}
        </ItemList>
        {/* <Row left={personDetails} right={starshipDetails} /> */}
        {/* {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>

          <ErrorButton />
        </div>
        <PeoplePage /> */}
      </div>
    );
  }
}

export default App;
