import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    itemList: [],
    loading: true
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({
        itemList,
        loading: false
      });
    });
  }

  renderItems(arr) {
    const renderItem = this.props.children;

    return arr.map(({ id, ...item }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.propsOnItemSelected(id)}
        >
          {renderItem(item)}
        </li>
      );
    });
  }

  render() {
    const { itemList, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
