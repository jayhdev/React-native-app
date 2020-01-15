import React from 'react';
import { Button } from 'react-native-elements';

export default ({ title, ...rest }) => <Button title={title} {...rest} />;
