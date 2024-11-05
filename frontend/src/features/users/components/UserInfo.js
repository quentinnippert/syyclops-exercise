import React, { useMemo } from 'react';

import Row  from '../../../layouts/Row';
import Column from '../../../layouts/Column';

import Paragraph from '../../../components/texts/Paragraph';
import Label from '../../../components/texts/Label';

const UserInfo = ({
    user,
    className = ''
}) => {

    const age = useMemo(() => {

        if (!user?.birth_date) return null;

        const today = new Date();
        const birthDate = new Date(user.birth_date);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()));
        {
            return age - 1;
        }

        return age;
    }, [user?.birth_date]);

    return (
        <Column className={`gap-2 ${className}`}>
            <Row className='gap-2'>
                <Column>
                    <Label size='lb-md'>
                        First name
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {user.first_name}
                    </Paragraph>
                </Column>
                <Column>
                    <Label size='lb-md'>
                        Last name
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {user.last_name}
                    </Paragraph>
                </Column>
            </Row>
            <Row className='gap-2'>
                <Column>
                    <Label size='lb-md'>
                        Email
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {user.email}
                    </Paragraph>
                </Column>
            </Row>
            <Row className='gap-2'>
                <Column>
                    <Label size='lb-md'>
                        Phone
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {user.phone}
                    </Paragraph>
                </Column>
            </Row>
            <Row className='gap-2'>
                <Column>
                    <Label size='lb-md'>
                        Age
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {age}
                    </Paragraph>
                </Column>
                <Column>
                    <Label size='lb-md'>
                        Gender
                    </Label>
                    <Paragraph size='p-lg' className='m0'>
                        {user.gender.name}    
                    </Paragraph>
                </Column>
            </Row>
        </Column>
    );
}

export default UserInfo;