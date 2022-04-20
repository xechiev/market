import React from 'react';
import { UserDTO } from '../../types/UserDTO';
import UserCard from '../userCard';

const UserList = ({ dataList }:any) => dataList.map((item:UserDTO) => {
  const {
    userId, lastName, firstName, email, role, isBlocked,
  } = item;

  return <UserCard key={userId} lastName={lastName} firstName={firstName} email={email} role={role} isBlocked={isBlocked} />;
});
export default UserList;
