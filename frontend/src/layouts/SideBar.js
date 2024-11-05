import React from 'react';
import './index.css';

const SideBar = ({
    children,
    className = ''
}) => {
  return (
    <div className={`sidebar background-bottom-left ${className}`}>
        {children}
    </div>
  );
}

export default React.memo(SideBar);

