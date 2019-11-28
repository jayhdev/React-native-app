import axios from 'axios';
import { Alert } from 'react-native';

import { getStore } from '../Redux';
import getEnvVars from '../../environment';
import navigationService from './navigation';

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
    // const store = getStore();
    // const { token } = store.getState().auth;
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGM5MWRkOTM2ZmVmYTM2MWU1NjA4MWUiLCJlbWFpbCI6Im1vYmlsZUB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJG4wNVprWVVsanRlSHB6QkN4N3NwQ3U2MUsvNURrOS9yVEFKVTBueERFZ0lRbE83cHZJUUtXIiwiY3JlYXRlZEF0IjoiMjAxOS0xMS0xMVQwODozNzo0NS42MTJaIiwidXBkYXRlZEF0IjoiMjAxOS0xMS0xMVQwODozNzo0NS42MTJaIiwiX192IjowLCJpYXQiOjE1NzQ1OTk3MTAsImV4cCI6MTU3NTIwNDUxMH0.2dhH-vEhsELxRNBE0dwJ3SUhHUOkBN77gbxXgfKJGjc';
    requestObject.headers.Authorization = token;
  }

  console.log('requestObject:', requestObject);

  return axios(`${apiUrl}/api${url}`, requestObject)
    .then(res => res.data)
    .catch(e => {
      if (authRequired) {
        switch (e.response.status) {
          case 401:
            navigationService.navigate('SignIn');
            break;

          case 500:
            Alert.alert(
              'Server Error',
              'There is problem with the server. Please try again later',
              [{ text: 'Try Again' }]
            );
            break;

          default:
            Alert.alert(
              'Something went wrong',
              'Something went wrong with this action. Please try again',
              [{ text: 'Try Again' }]
            );
            break;
        }
      }
      console.log(e.response);

      return e.response;
    });
}
