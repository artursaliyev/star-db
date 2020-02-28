import BaseHttpService from "./baseHttpService";

export default class PlanetService extends BaseHttpService {
  all = async () => {
    const data = await this.getResource(`/planets/`);
    return data.results.map(this._transformPlanet);
  };

  get = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };
}
