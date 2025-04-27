import React from 'react';
import '../../styles/base/typography.css';

const HeadlineSmall = ({ children, className = "", ...props }) => {
  return (
    <h3 className={`headline-small ${className}`} {...props}>
      {children}
    </h3>
  );
};

export default HeadlineSmall;