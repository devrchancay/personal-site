import React from 'react';

export default ({ children, isTrue = false }) => {
  return isTrue ? <>{children}</> : null;
};
