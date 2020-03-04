import PersonService from "./person.service";
import PlanetService from "./palanet.service";
import StarshipService from "./starship.service";

const mockApi = {
  persons: new PersonService(),
  planets: new PlanetService(),
  starships: new StarshipService()
};

export default mockApi;
