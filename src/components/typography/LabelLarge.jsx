import React from 'react';
import '../../styles/base/typography.css';

const LabelLarge = ({ children, className = "", ...props }) => {
  return (
    <span className={`label-large ${className}`} {...props}>
      {children}
    </span>
  );
};

export default LabelLarge;