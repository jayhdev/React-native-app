import React from 'react';
import { ListItem } from 'react-native-elements';

export default ({ title, subTitle, rightTitle, ...rest }) => (
  <ListItem
    title={title}
    subtitle={subTitle && subTitle.toString()}
    rightTitle={rightTitle && rightTitle.toString()}
    {...rest}
  />
);
