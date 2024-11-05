import React from 'react';
import './index.css';

export default function Row({
    children,
    className = ''
}) {
  return (
    <div className={`row ${className}`}>
        {children}
    </div>
  );
}
