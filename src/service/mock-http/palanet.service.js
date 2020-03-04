import BaseHttpService from "./baseHttpService";

export default class PlanetService extends BaseHttpService {
  _planets = [
    {
      id: 1,
      name: "Earth [TEST DATA]",
      population: "7.530.000.000",
      rotationPeriod: "23 hours 56 seconds",
      diameter: "12.742 km"
    },
    {
      id: 2,
      name: "Venus [TEST DATA]",
      population: "not known",
      rotationPeriod: "243 days",
      diameter: "12.104 km"
    }
  ];

  all = async () => {
    return this._planets;
  };

  get = async () => {
    return this._planets[0];
  };

  imageUrl = () => {
    return `https://placeimg.com/600/400/tech`;
  };
}
