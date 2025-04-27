import React from 'react';
import '../../styles/base/typography.css';

const BodySmall = ({ children, className = "", ...props }) => {
  return (
    <p className={`body-small ${className}`} {...props}>
      {children}
    </p>
  );
};

export default BodySmall;