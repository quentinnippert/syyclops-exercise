import React from 'react';
import './index.css';

export default function Main({
    children
}) {
  return (
    <div className='main-layout'>
        {children}
    </div>
  );
}
