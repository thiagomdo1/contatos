import axios from "axios";
import config from "../../config";

class Api {
  constructor() {
    axios.defaults.crossDomain = true;
  }

  readContatos() {
    return axios.get(config.endpoints.readContatos);
  }

  deleteContato(id) {
    console.log(config.endpoints.deleteContato + id)
    return axios.delete(config.endpoints.deleteContato + id);
  }

}

export default new Api();