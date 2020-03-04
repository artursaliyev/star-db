import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = api => {
  return {
    getData: api.persons.get,
    getImageUrl: api.persons.imageUrl
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
