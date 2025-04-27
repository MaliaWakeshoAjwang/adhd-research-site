import React from 'react';
import '../../styles/base/typography.css';

const DisplaySmall = ({ children, className = "", ...props }) => {
  return (
    <h2 className={`display-small ${className}`} {...props}>
      {children}
    </h2>
  );
};

export default DisplaySmall;