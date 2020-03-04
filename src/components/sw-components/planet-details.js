import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = api => {
  return {
    getData: api.planets.get,
    getImageUrl: api.planets.imageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
