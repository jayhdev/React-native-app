const overViewDefault = require('../Assets/Overview_default.png');
const overViewPink = require('../Assets/Overview_pink.png');
const financesDefault = require('../Assets/Finances_default.png');
const financesPink = require('../Assets/Finances_pink.png');
const checklistDefault = require('../Assets/Checklist_default.png');
const checklistPink = require('../Assets/Checklist_pink.png');

const navigationItems = [
  {
    id: '01',
    name: 'Overview',
    default: overViewDefault,
    pink: overViewPink
  },
  {
    id: '02',
    name: 'Finances',
    default: financesDefault,
    pink: financesPink
  },
  {
    id: '03',
    name: 'Checklist',
    default: checklistDefault,
    pink: checklistPink
  },
  {
    id: '04',
    name: 'TimeLine',
    default: null,
    pink: null
  },
  {
    id: '05',
    name: 'Guests',
    default: null,
    pink: null
  }
];

export default navigationItems;
