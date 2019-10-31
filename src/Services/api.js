import {apiUrl} from '../../environment.js'

export default function request(url, data, method = 'GET', authRequired = true) {
  const requestObject = {
    method, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }

  if (authRequired) requestObject.headers['Authorization'] = 'token'

  return fetch(`${apiUrl}${url}`, requestObject)
    .then(res => {
      console.log('Response', res)

      return res
    })
    .catch(e => {
      console.log('Error in the api service', e)
    })
}