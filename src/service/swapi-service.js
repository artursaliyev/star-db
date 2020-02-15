export default class SwapiService {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, recived ${response.status}`);
    }

    return await response.json();
  }

  async getAllPeople() {
    const data = await this.getResource(`/people/`);
    return data.results.map(this._transformPerson);
  }

  async etPerson(id) {
    const person = this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const data = await this.getResource(`/planets/`);
    return data.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const data = await this.getResource(`/starships/`);
    return data.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = this.getResource(`/starship /${id}/`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const re = /\/([0-9]*)\/$/;
    return item.url.match(re)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
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
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    };
  }
}
