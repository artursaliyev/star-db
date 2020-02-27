import BaseHttpService from "./baseHttpService";

export default class PersonService extends BaseHttpService {
  async getAllPeople() {
    const data = await this.getResource(`/people/`);
    return data.results.map(this._transformPerson);
  }

  async etPerson(id) {
    const person = this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
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
