import axios from 'axios';
import constants from '../constants/api';

const getToken = () => {
  let user = localStorage.getItem('userData') || '{}';

  let { token } = JSON.parse(user);

  return token;
};

export default {
  request(method, uri, data) {
    if (!method) {
      console.error('API function call requires method argument');
      return;
    }

    if (!uri) {
      console.error('API function call requires uri argument');
      return;
    }

    var url = constants.apiEndPoint + uri;
    const token = getToken();
    return axios({
      method,
      url,
      data: data || null,
      headers: { token }
    })
      .then(response => {
        return { response, error: null };
      })
      .catch(error => ({ error, response: null }));
  }
};
