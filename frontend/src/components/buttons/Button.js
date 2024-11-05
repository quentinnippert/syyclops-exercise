import React from 'react';
import Paragraph from '../texts/Paragraph';

import './index.css';

export default function Button({
    onClick,
    label,
    labelSize = 'p-md',
    className = '',
    variant = 'primary',
    size = 'btn-md',
}) {
  return (
    <button
        className={`button-container ${variant} ${size} ${className}`}
        onClick={onClick}
    >
        <Paragraph
            size={labelSize}
            className='m0'
        >
            {label}
        </Paragraph>
    </button>
  );
}
