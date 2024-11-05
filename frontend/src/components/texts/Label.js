import React from 'react';

export default function Label({
    children,
    size = 'lb-md',
    className = ''
}) {
  return (
    <label className={`custom-label ${size} ${className}`}>{children}</label>
  );
}
