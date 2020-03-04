import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = mapMethodsToProps => Wrapper => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {api => {
          const serviceProps = mapMethodsToProps(api);
          return <Wrapper {...props} {...serviceProps}></Wrapper>;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
