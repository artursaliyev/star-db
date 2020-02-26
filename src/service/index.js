import PersonService from "./person.service";
import PlanetService from "./palanet.service";
import StarshipsService from "./starship.service";

const api = {
  persons: new PersonService(),
  planets: new PlanetService(),
  starships: new StarshipsService()
};

console.log("API");
export default api;
