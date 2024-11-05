import React from 'react';

import Label from '../texts/Label';
import Error from '../feedback/Error';

import Row from '../../layouts/Row';
import Column from '../../layouts/Column';

import './index.css';

const SelectInput = ({ value, label, onChange, options, className = '', placeholder = 'Select', errors = [] }) => {
    return (
        <Column className={`justify-start align-start ${className}`}>
            <Label>
                {label}
            </Label>
            <Row className={`dropdown-container`}>
                <select
                    className="dropdown-input"
                    value={value}
                    onChange={onChange}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="dropdown-icon">▼</span>
            </Row>
            {
                errors.length > 0 &&
                <Column className='justify-start align-start'>
                    {
                        errors.map((error, index) => (
                            <Error
                                key={index}
                                error={error}
                                size='p-sm'
                            />
                        ))
                    }
                </Column>
            }
        </Column>
    );
};

export default SelectInput;
