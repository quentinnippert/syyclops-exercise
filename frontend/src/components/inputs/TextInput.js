import React from 'react';

import Column from '../../layouts/Column';

import Label from '../texts/Label';
import Error from '../feedback/Error';

import './index.css';

export default function TextInput({
    label,
    type = 'text',
    placeholder = '',
    value = '',
    onChange = () => { },
    className = '',
    containerClassName = '',
    labelSize = 'lb-md',
    errors = [],
    required = false,
}) {
    return (
        <Column className={`justify-start align-start ${containerClassName}`}>
            <Label size={labelSize}>
                {label}
            </Label>
            <input
                value={value}
                type={type}
                className={`custom-input ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            >
            </input>
            {
                errors.length > 0 &&
                <Column className='justify-start align-start gap-05'>
                    {
                        errors.map((error, index) => (
                            <Error
                                key={index}
                                error={error}
                                size='p-sm'
                                className='m0'
                            />
                        ))
                    }
                </Column>
            }
        </Column>
    );
}
