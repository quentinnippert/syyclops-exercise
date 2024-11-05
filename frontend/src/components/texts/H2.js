import React from 'react';
import './index.css';

export default function H2({
    children,
    className = ''
}) {
  return (
    <h2 className={`title-2 ${className}`}>
        {children}
    </h2>
  )
}
