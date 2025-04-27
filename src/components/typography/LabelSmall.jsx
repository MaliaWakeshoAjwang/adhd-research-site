import React from 'react';
import '../../styles/base/typography.css';

const LabelSmall = ({ children, className = "", ...props }) => {
  return (
    <span className={`label-small ${className}`} {...props}>
      {children}
    </span>
  );
};

export default LabelSmall;