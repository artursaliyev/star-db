import React from "react";

import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name}({model})
  </span>
);

const mapPersonMethodsToProps = api => {
  return {
    getData: api.persons.all
  };
};

const mapPlanetMethodsToProps = api => {
  return {
    getData: api.planets.all
  };
};
const mapStarshipMethodsToProps = api => {
  return {
    getData: api.starships.all
  };
};
const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export { PlanetList, PersonList, StarshipList };
