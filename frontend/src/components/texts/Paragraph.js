import React from 'react';
import './index.css';

export default function Paragraph({
    children,
    size = 'p-md',
    className = ''
}) {
  return (
    <p className={`paragraph ${size} ${className}`} >
        {children}
    </p>
  );
}
