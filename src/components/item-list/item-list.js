import React from "react";
import PropTypes from "prop-types";

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

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
