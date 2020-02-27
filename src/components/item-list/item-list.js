import React, { Component } from "react";

import SwapiService from "../../service";

import "./item-list.css";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: [],
    loading: true
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({
        peopleList,
        loading: false
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.propsOnItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
