import React from 'react';
import '../../styles/base/typography.css';

const TitleSmall = ({ children, className = "", ...props }) => {
  return (
    <h6 className={`title-small ${className}`} {...props}>
      {children}
    </h6>
  );
};

export default TitleSmall;