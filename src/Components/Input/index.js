import React from 'react';
import { Input } from 'react-native-elements'

export default ({placeholder, ...rest}) => (
  <Input 
    placeholder={placeholder}
    {...rest}
  />
)