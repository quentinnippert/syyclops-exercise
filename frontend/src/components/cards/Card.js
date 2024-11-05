import React from 'react';
import './index.css';

export default function Card({
    children,
    onClick,
    className = ''
}) {

  return (
    <div
        onClick={onClick}
        className={`card ${className}`}
    >
        {children}
    </div>
  );
}