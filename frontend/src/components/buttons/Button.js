import React from 'react';
import Paragraph from '../texts/Paragraph';

import './index.css';

export default function Button({
    onClick,
    loading = false,
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
            {
                loading ?
                    <div className='loader'></div>
                    :
                    <Paragraph
                        size={labelSize}
                        className='m0 p-exbold'
                    >
                        {label}
                    </Paragraph>}
        </button>
    );
}
