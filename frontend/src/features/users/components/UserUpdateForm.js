/** Hooks & Methods */
import React, { useEffect, useMemo, useState } from 'react'
import useUpdateUser from '../hooks/useUpdateUser';
import useGetGenders from '../../genders/hooks/useGetGenders';

/** Components */
import Row from '../../../layouts/Row'
import Button from '../../../components/buttons/Button';
import Column from '../../../layouts/Column'
import DateInput from '../../../components/inputs/DateInput';
import SelectInput from '../../../components/inputs/SelectInput';

/** Layouts */
import TextInput from '../../../components/inputs/TextInput';

import './index.css'
import { useToastContext } from '../../../context/ToastContext';

export default function UserUpdateForm({
    onUpdate,
    user
}) {

    const {
        genders,
        loading: loadingGenders,
        error: errorGenders,
        refresh: refreshGenders
    } = useGetGenders();

    const {
        loading: updating,
        errors: errorsUpdate,
        updateUser
    } = useUpdateUser();

    const { showToast } = useToastContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name)
            setLastName(user.last_name)
            setEmail(user.email)
            setPhone(user.phone)
            setGender(user.gender.id)
            setBirthDate(user.birth_date)
        }
    }, [user]);

    useEffect(() => {
        if (errorsUpdate) {
            showToast({
                message: 'Error updating user',
                type: 't-error',
                labelType: 'p-error'
            });
        }
    }, [errorsUpdate]);

    const gendersOptions = useMemo(() => {
        if (genders?.length === 0 || !genders) return []

        return genders.map(({ id, name }) => ({
            value: id,
            label: name
        }));
    }, [genders]);

    return (
        <Column className='w100 align-center gap-2'>
            <Row className='gap-1'>
                <TextInput
                    label={'First Name'}
                    type='text'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    errors={errorsUpdate?.first_name}
                    required
                />
                <TextInput
                    label={'Last Name'}
                    type='text'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    errors={errorsUpdate?.last_name}
                    required
                />
            </Row>
            <Row className='gap-1'>
                <TextInput
                    type='email'
                    label='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    errors={errorsUpdate?.email}
                    required
                />
                <TextInput
                    type='tel'
                    label='Phone'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    errors={errorsUpdate?.phone}
                    required
                />
            </Row>
            <Row className='gap-1'>
                <SelectInput
                    label={'Gender'}
                    options={gendersOptions}
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    placeholder='Select'
                    errors={errorsUpdate?.gender_id}
                />
                <DateInput
                    label={'Birth Date'}
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    errors={errorsUpdate?.birth_date}
                />
            </Row>
            <Row className='gap-1'>
                <Button
                    label={'Update'}
                    labelSize='p-lg'
                    size='btn-lg'
                    variant='primary'
                    loading={updating}
                    onClick={() => {
                        updateUser(
                            user.id,
                            {
                                first_name: firstName,
                                last_name: lastName,
                                email,
                                phone,
                                birth_date: birthDate,
                                gender_id: gender,
                            },
                            (updatedUser) => {
                                onUpdate(updatedUser)
                                showToast({
                                    message: 'User updated',
                                    type: 't-success',
                                    labelType: 'p-success'
                                })
                            }
                        );
                    }}
                />
            </Row>
        </Column>
    );
}
