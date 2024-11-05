import React, { useMemo } from 'react';
import './index.css';
import Row from '../../layouts/Row';
import Column from '../../layouts/Column';
import Label from '../texts/Label';
import Error from '../feedback/Error';

const DateInput = ({ label, value, onChange, className, errors = [] }) => {

    const formattedDate = useMemo(() => {
        if (!value) return '';

        const date = new Date(value);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    }, [value]);

    return (
        <Column className={`justify-start align-start ${className}`}>
            <Label>
                {label}
            </Label>
            <Row className='dropdown-container'>
                <input
                    type="date"
                    className="dropdown-input"
                    value={formattedDate}
                    onChange={onChange}
                    placeholder='YYYY-MM-DD'
                />
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

export default DateInput;