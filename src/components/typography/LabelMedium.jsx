import React from 'react';
import '../../styles/base/typography.css';

const LabelMedium = ({ children, className = "", ...props }) => {
  return (
    <span className={`label-medium ${className}`} {...props}>
      {children}
    </span>
  );
};

export default LabelMedium;