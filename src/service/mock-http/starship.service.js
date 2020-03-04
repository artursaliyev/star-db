import BaseHttpService from "./baseHttpService";

export default class StarshipService extends BaseHttpService {
  _starships = [
    {
      id: 1,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100
    }
  ];

  all = async () => {
    return this._starships;
  };

  get = async () => {
    return this._starships[0];
  };

  imageUrl = () => {
    return `https://placeimg.com/400/400/nature`;
  };
}
