import React from 'react';
import '../../styles/base/typography.css';

const DisplayLarge = ({ children, className = "", ...props }) => {
  return (
    <h1 className={`display-large ${className}`} {...props}>
      {children}
    </h1>
  );
};

export default DisplayLarge;