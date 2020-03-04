import BaseHttpService from "./baseHttpService";

export default class PersonService extends BaseHttpService {
  _people = [
    {
      id: 1,
      name: "Bilbo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown"
    },

    {
      id: 2,
      name: "Frodo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown"
    }
  ];

  all = async () => {
    return this._people;
  };

  get = async () => {
    return this._people[0];
  };

  imageUrl = () => {
    return `https://placeimg.com/400/500/people`;
  };
}
