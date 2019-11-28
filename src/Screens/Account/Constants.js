import React from 'react';
import { Switch } from 'react-native';

import colors from '../../Config/color';

const itemList = [
  {
    name: 'NOTIFICATIONS',
    lists: [
      {
        name: 'Payment Deadlines',
        rightElement: <Switch />
      }
    ]
  },
  {
    name: 'OTHER',
    lists: [
      {
        name: 'Terms and Conditions',
        chevron: true
      },
      {
        name: 'Report a Problem',
        chevron: true
      },
      {
        name: 'Help',
        chevron: true
      }
    ]
  },
  {
    name: 'GENERAL',
    lists: [
      {
        name: 'Share Link',
        chevron: true,
        method: 'shareLink'
      },
      {
        name: 'Sign Out',
        color: colors.secondary,
        method: 'logout'
      }
    ]
  }
];

export default itemList;
