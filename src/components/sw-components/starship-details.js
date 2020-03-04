import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = api => {
  return {
    getData: api.starships.get,
    getImageUrl: api.starships.imageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
