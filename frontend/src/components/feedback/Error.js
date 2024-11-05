import React from 'react'

import Row from '../../layouts/Row';
import Paragraph from '../texts/Paragraph';

import errorIcon from '../../assets/icons/miscellaneous/error.png';

import './index.css';

export default function Error({
    error = '',
    size = 'p-md',
    iconSize = 'icerr-sm',
    className = ''
}) {
    return (
        <Row className='justify-start align-center gap-05'>
            <img src={errorIcon} alt='error' className={iconSize} />
            <Paragraph
                size={size}
                className={`error ${className}`}
            >
                {error}
            </Paragraph>
        </Row>
    );
}
