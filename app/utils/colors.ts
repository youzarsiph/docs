/**
 * Colors
 */

import colors from 'tailwindcss/colors'

const unwanted = [
  'inherit',
  'current',
  'transparent',
  'black',
  'white',
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
]

const Colors = Object.entries(colors).filter(
  (color) => !unwanted.includes(color[0]),
)

export default Colors
