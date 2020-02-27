export default class BaseHttpService {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, recived ${response.status}`);
    }

    return await response.json();
  }

  _extractId(item) {
    const re = /\/([0-9]*)\/$/;
    return item.url.match(re)[1];
  }
}
