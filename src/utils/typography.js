import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import deYoungTheme from 'typography-theme-de-young';

deYoungTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300', '300i', '400'].join(', ')
    }
  ],
  'p,li, nav div span': {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontWeight: '300',
    fontSize: `${15 / 18 * 100}%`
  },
  'nav ul li a': { fontFamily: ['Open Sans', 'sans-serif'].join(','), fontWeight: '400', fontStyle: 'normal' }
});

const typography = new Typography(deYoungTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
