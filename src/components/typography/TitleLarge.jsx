import React from 'react';
import '../../styles/base/typography.css';

const TitleLarge = ({ children, className = "", ...props }) => {
  return (
    <h4 className={`title-large ${className}`} {...props}>
      {children}
    </h4>
  );
};

export default TitleLarge;