import React from 'react';
import '../../styles/base/typography.css';

const BodyLarge = ({ children, className = "", ...props }) => {
  return (
    <p className={`body-large ${className}`} {...props}>
      {children}
    </p>
  );
};

export default BodyLarge;