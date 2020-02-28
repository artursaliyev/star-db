import BaseHttpService from "./baseHttpService";

export default class StarshipsService extends BaseHttpService {
  all = async () => {
    const data = await this.getResource(`/starships/`);
    return data.results.map(this._transformStarship);
  };

  get = async id => {
    const starship = this.getResource(`/starship /${id}/`);
    return this._transformStarship(starship);
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      lenght: starship.lenght,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  };
}
