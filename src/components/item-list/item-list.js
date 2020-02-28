import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";
import api from "../../service";
import { withData } from "../hoc-helpers";

const ItemList = props => {
  const { data, propsOnItemSelected, children: renderLabel } = props;

  const renderItems = arr => {
    return arr.map(({ id, ...item }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => propsOnItemSelected(id)}
        >
          {renderLabel(item)}
        </li>
      );
    });
  };

  const items = renderItems(data);

  return <ul className="item-list list-group">{items}</ul>;
};

export default withData(ItemList, api.persons.all);
