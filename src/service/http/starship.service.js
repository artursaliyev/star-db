import BaseHttpService from "./baseHttpService";

export default class StarshipService extends BaseHttpService {
  all = async () => {
    const data = await this.getResource(`/starships/`);
    return data.results.map(this._transformStarship);
  };

  get = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      lenght: starship.lenght,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  };
}
