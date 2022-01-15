const COLORS = {
  'grey': {
    'darkest': 'hsl(0, 4%, 5%)',
    'darker': 'hsl(0, 2%, 12%)',
    'dark': 'hsl(0, 1%, 20%)',
    'base': 'hsl(0, 0%, 33%)',
    'light': 'hsl(0, 0%, 48%)',
    'lighter': 'hsl(0, 5%, 84%)',
    'lightest': 'hsl(0, 15%, 97%)'
  },
  'green': {
    'darkest': 'hsl(131, 100%, 11%)',
    'darker': 'hsl(134, 92%, 19%)',
    'dark': 'hsl(132, 76%, 29%)',
    'base': 'hsl(130, 64%, 45%)',
    'light': 'hsl(118, 49%, 69%)',
    'lighter': 'hsl(114, 52%, 81%)',
    'lightest': 'hsl(113, 50%, 94%)'
  },
  'red': {
    'darkest': 'hsl(1, 81%, 29%)',
    'darker': 'hsl(2, 64%, 38%)',
    'dark': 'hsl(2, 52%, 47%)',
    'base': 'hsl(0, 62%, 60%)',
    'light': 'hsl(3, 72%, 76%)',
    'lighter': 'hsl(4, 81%, 86%)',
    'lightest': 'hsl(6, 91%, 95%)'
  }
} as const;

export { COLORS };
