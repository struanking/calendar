import React from 'react';
import './grid.css';

export const GridItem = ({ children }) => (
  <div>
    {children}
  </div>
);

export default ({ children }) => (
  <div className="grid">
    {children}
  </div>
);
