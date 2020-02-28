import BaseHttpService from "./baseHttpService";

export default class PersonService extends BaseHttpService {
  all = async () => {
    const data = await this.getResource(`/people/`);
    return data.results.map(this._transformPerson);
  };

  get = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  imageUrl = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };
}
