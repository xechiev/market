import React, { useContext } from 'react';
import classes from '../../pages/admin-page/AdminPage.module.scss';
import AdminApiService from '../../services/AdminApiService';
import ContextRemoveElemFunc from '../../context/ContextRemoveElemFunc';

const UserCard = ({
  userId, lastName, firstName, email, role, isBlocked,
}:any) => {
  const api: AdminApiService = new AdminApiService();
  const contextFunc = useContext(ContextRemoveElemFunc);
  const { removeUsersElement } = contextFunc;

  return (
    <div key={userId} className={classes.userCards}>
      <div>
        id :
        {userId}
      </div>
      <div>
        Фамилия :
        {lastName}
      </div>
      <div>
        Имя :
        {firstName}
      </div>
      <div>
        Email :
        {email}
      </div>
      <div>
        Роль :
        {role}
      </div>
      <div>
        Заблокирован :
        {isBlocked ? 'Да' : 'Нет'}
      </div>
      <button
        type="button"
        className={classes.btnModeration}
        onClick={() => api.blockUser(userId).then(() => removeUsersElement(userId))}
      >
        Заблокировать
      </button>
    </div>
  );
};

export default UserCard;
