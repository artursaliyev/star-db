import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import api from "../../service";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        propsOnItemSelected={this.onPersonSelected}
        getData={api.persons.all}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <div>
        <Row left={itemList} right={personDetails} />
        <Row left="Foo" right="Bar" />
      </div>
    );
  }
}
