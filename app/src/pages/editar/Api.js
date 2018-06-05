import axios from "axios";
import config from "../../config";

class Api {
  constructor() {
    axios.defaults.crossDomain = true;
  }

  readContato(id) {
    return axios.get(config.endpoints.readContato + id);
  }

  createContato(data) {
    return axios({
      method: "post",
      url: config.endpoints.createContato,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
  }

  updateContato(id, data) {
    return axios({
      method: "put",
      url: config.endpoints.updateContato + id,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
  }
}

export default new Api();