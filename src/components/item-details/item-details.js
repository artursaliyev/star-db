import React, { Component } from "react";

import "./item-details.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  onError = e => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateItem = () => {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({ loading: true, item: {} });
    getData(itemId)
      .then(item => {
        this.setState({ item, loading: false });
      })
      .catch(this.onError);
  };

  render() {
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const hasData = !(error || loading);
    const content = hasData ? <Content data={this.state.item} /> : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const Content = ({ data }) => {
  const { id, name } = data;
  return (
    <>
      <img
        className="item-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="item"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            {/* <span>{gender}</span> */}
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            {/* <span>{birthYear}</span> */}
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            {/* <span>{eyeColor}</span> */}
          </li>
        </ul>
      </div>
    </>
  );
};
