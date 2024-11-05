import React from 'react';
import './index.css';

export default function Column({
    children,
    className = ''
}) {
    return (
        <div className={`column ${className}`}>
            {children}
        </div>
    );
}
