import React, { Component } from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

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
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList propsOnItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
