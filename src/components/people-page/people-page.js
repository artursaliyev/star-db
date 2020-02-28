import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import api from "../../service";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const itemList = (
      <ItemList
        propsOnItemSelected={this.onItemSelected}
        getData={api.persons.all}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />;
      </ErrorBoundry>
    );
  }
}
