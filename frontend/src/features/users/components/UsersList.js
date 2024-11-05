import React from 'react';
import UserItem from './UserItem';
import './index.css';

export default function UsersList({
    users,
    selectedUserId,
    loading,
    onUserClick
}) {
  
    if(loading)
    {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
                <div className='loader'></div>
            </div>
        );
    }

    return users.map(user => (
        <UserItem
            key={user.id}
            name={user.first_name + ' ' + user.last_name}
            onClick={() => onUserClick(user)}
            className={selectedUserId === user.id ? 'selected' : ''}
        />
    ));
}
