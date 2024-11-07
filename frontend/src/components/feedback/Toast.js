import React, { useMemo } from 'react';
import Row from '../../layouts/Row';

import './index.css';
import Paragraph from '../texts/Paragraph';

export default function Toast({
    type = 't-success',
    labelType = 'p-success',
    display = false,
    message = null,
}) {

    const show = useMemo(() => (display ? 't-show' : ''), [display]);

    if (!display)
    {
        return null;
    }

    return (
        <Row className={`justify-start align-center toast ${type} ${show}`}>
            <Paragraph className={`m0 ${labelType}`}>
                {message}
            </Paragraph>
        </Row>
    );
}
