import React from 'react';

export const Header1 = ({ color, children }) => (
  <h1
    style={{
      textTransform: 'uppercase',
      textAlign: 'center',
      paddingTop: '8rem',
      paddingBottom: '8rem',
      color: color
    }}
  >
    {children}
  </h1>
);

export const Header2 = ({ color, children }) => (
  <h2
    style={{
      fontWeight: '400',
      textAlign: 'center',
      color: color
    }}
  >
    {children}
  </h2>
);

export const Header3 = ({ color, children, id }) => (
  <h3 style={{ color: color }} id={id}>
    {children}
  </h3>
);
