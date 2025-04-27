import React from 'react';
import '../../styles/base/typography.css';

const HeadlineMedium = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`headline-medium ${className}`} {...props}>
      {children}
    </h3>
  );
};

export default HeadlineMedium;