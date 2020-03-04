import React from "react";

import "./item-list.css";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const renderItems = arr => {
    return arr.map(({ id, ...item }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {renderLabel(item)}
        </li>
      );
    });
  };

  const items = renderItems(data);

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
