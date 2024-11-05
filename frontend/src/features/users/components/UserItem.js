import React from 'react';
import Card from '../../../components/cards/Card';
import Paragraph from '../../../components/texts/Paragraph';

import './index.css';

const UserItem = ({
    name,
    onClick,
    className
}) => {
    return (
        <Card
            className={`user-item ${className}`}
            onClick={onClick}
        >
            <Paragraph size='md' className='m0'>
                {name}
            </Paragraph>
        </Card>
    );
}

export default React.memo(UserItem)
