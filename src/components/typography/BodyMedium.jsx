import React from 'react';
import '../../styles/base/typography.css';

const BodyMedium = ({ children, className = "", ...props }) => {
  return (
    <p className={`body-medium ${className}`} {...props}>
      {children}
    </p>
  );
};

export default BodyMedium;