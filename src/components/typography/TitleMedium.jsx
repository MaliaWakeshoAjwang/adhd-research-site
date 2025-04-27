import React from 'react';
import '../../styles/base/typography.css';

const TitleMedium = ({ children, className = "", ...props }) => {
  return (
    <h5 className={`title-medium ${className}`} {...props}>
      {children}
    </h5>
  );
};

export default TitleMedium;