import React, { Component } from "react";

import "./item-details.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.itemId !== this.props.itemId ||
      prevProps.getData !== this.props.getData
    ) {
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
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({ loading: true, item: {} });

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        });
      })
      .catch(this.onError);
  };

  render() {
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }

    const { loading, error, item, image } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const hasData = !(error || loading);
    const content = hasData ? (
      <>
        <img className="item-image" src={image} alt="item" />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </>
    ) : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}
