import React from 'react';

export const Header1 = ({ color, children, paddingTop, paddingBottom }) => (
  <div style={{ height: 500 }}>
    <h1
      style={{
        textTransform: 'uppercase',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: color
      }}
    >
      {children}
    </h1>
  </div>
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
