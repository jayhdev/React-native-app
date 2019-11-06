import React from 'react';
import { Button } from 'react-native-elements'
import ButtonStyle from './ButtonStyle'

export default ({styles, title, ...rest}) => (
  <Button 
    title={title}
    buttonStyle={{
      ...ButtonStyle,
      ...styles
    }}
    {...rest}
  />
)