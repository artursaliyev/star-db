import PersonService from "./person.service";
import PlanetService from "./palanet.service";
import StarshipService from "./starship.service";

const api = {
  persons: new PersonService(),
  planets: new PlanetService(),
  starships: new StarshipService()
};

export default api;
