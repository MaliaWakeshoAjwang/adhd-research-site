import React from 'react';
import '../../styles/base/typography.css';

const HeadlineLarge = ({ children, className = "", ...props }) => {
  return (
    <h2 className={`headline-large ${className}`} {...props}>
      {children}
    </h2>
  );
};

export default HeadlineLarge;