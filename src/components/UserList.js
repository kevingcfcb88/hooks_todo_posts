import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <ul>
      {users.map(u => {
        return <li key={u.id}>{u.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
