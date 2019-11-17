import axios from 'axios';
import { getStore } from '../Redux';
import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();

export default function request(
  url,
  data,
  method = 'get',
  authRequired = true
) {
  const requestObject = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data
  };

  if (authRequired) {
    const store = getStore();
    const { token } = store.getState().auth;

    requestObject.headers.Authorization = token;
  }

  console.log('requestObject:', requestObject);

  return axios(`${apiUrl}/api${url}`, requestObject)
    .then(res => res.data)
    .catch(e => e.response);
}
