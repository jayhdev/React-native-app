import React from 'react';
import { ListItem } from 'react-native-elements';

export default ({ title, ...rest }) => <ListItem title={title} {...rest} />;
