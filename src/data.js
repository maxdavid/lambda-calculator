// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = [
  {
    char: '1',
    value: '1',
    type: 'number'
  },
  {
    char: '2',
    value: '2',
    type: 'number'
  },
  {
    char: '3',
    value: '3',
    type: 'number'
  },
  { char: '4', value: '4', type: 'number' },
  { char: '5', value: '5', type: 'number' },
  { char: '6', value: '6', type: 'number' },
  { char: '7', value: '7', type: 'number' },
  { char: '8', value: '8', type: 'number' },
  { char: '9', value: '9', type: 'number' },
  { char: '0', value: '0', type: 'number' },
  { char: '.', value: '.', type: 'number' }
];

export const operators = [
  {
    char: '/',
    value: '/',
    type: 'operator'
  },
  {
    char: 'x',
    value: '*',
    type: 'operator'
  },
  {
    char: '-',
    value: '-',
    type: 'operator'
  },
  {
    char: '+',
    value: '+',
    type: 'operator'
  },
  {
    char: '=',
    value: '=',
    type: 'operator'
  }
];

export const specials = [
  { char: 'C', value: 'C', type: 'special' },
  { char: '+/-', value: 'posNeg', type: 'special' },
  { char: '%', value: '%', type: 'special' }
];
