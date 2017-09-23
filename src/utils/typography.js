import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
// import CodePlugin from 'typography-plugin-code';
// import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import deYoung from 'typography-theme-de-young';

const typography = new Typography(deYoung);

// const options = {
//   baseFontSize: '24px',
//   baseLineHeight: 1.45,
//   scaleRatio: 2.25,
//   googleFonts: [
//     {
//       name: 'Raleway',
//       styles: ['400']
//     }
//   ],
//   headerFontFamily: ['Raleway', 'sans-serif'],
//   bodyFontFamily: ['Raleway', 'sans-serif'],
//   plugins: [new CodePlugin()],
//   overrideStyles: ({ rhythm, scale }, options) => ({
//     [MOBILE_MEDIA_QUERY]: {
//       // Make baseFontSize on mobile 16px.
//       html: {
//         fontSize: `${16 / 16 * 100}%`
//       }
//     }
//   })
// };

// const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
