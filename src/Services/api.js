import axios from 'axios'
import getEnvVars from '../../environment.js'
const {apiUrl} = getEnvVars()

export default function request(url, data, method = 'get', authRequired = true) {
  const requestObject = {
    method, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data
  }

  if (authRequired) {
    const token = store.getState().auth.token

    requestObject.headers['Authorization'] = token
  } 

  console.log("requestObject:", requestObject )

  return axios(`${apiUrl}/api${url}`, requestObject)
    .then(res => {
      console.log('Response', res)

      return res
    })
    .catch(e => {
      console.log('Error in the api service', e)
    })
}