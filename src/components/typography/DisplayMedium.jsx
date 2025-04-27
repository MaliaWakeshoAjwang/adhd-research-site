import React from 'react';
import '../../styles/base/typography.css';

const DisplayMedium = ({ children, className = "", ...props }) => {
  return (
    <h1 className={`display-medium ${className}`} {...props}>
      {children}
    </h1>
  );
};

export default DisplayMedium;