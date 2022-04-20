import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListPage from '../pages/product-list-page';
import EditProfilePage from '../pages/edit-profile-page';
import { Footer } from '../components/footer/Footer';
import { AdminHeader, Header } from '../components/header/Header';
import AuthorizationPage from '../pages/authorization-page/AuthorizationPage';
import RegistrationPage from '../pages/registration-page/RegistrationPage';
import CreateProductPage from '../pages/create-product-page/CreateProductPage';
import NotFoundPage from '../pages/not-found-page';
import style from './App.module.scss';
import routes from '../constants/routes';
import AdminApiService from '../services/AdminApiService';
import AdminPage from '../pages/admin-page';
import ContextCurrentUserRole from './context/ContextCurrentUserRole';

const {
  ROUTE_HOME,
  ROUTE_EDIT_PROFILE,
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
  ROUTE_ADMIN,
  ROUTE_TO_SELL,
} = routes;

const App = () => {
  const [currentUserRole, setCurrentUserRole] = useState<string>('user');
  const api: AdminApiService = new AdminApiService();
  useEffect(() => {
    // нет возможности получить просто текущего пользователя без id т.к данные моковые. Как подключат бек, метод заменится
    // на получение текущего пользователя и все будет выглядеть корректно
    // сейчас любой не 33 id-user
    api.getCurrentUser(33).then((res) => setCurrentUserRole(res.role));
  }, []);

  return (
    <div className={style.app}>
      <Header />
      {(currentUserRole === 'admin') ? <AdminHeader /> : <Header />}
      <ContextCurrentUserRole.Provider value={currentUserRole}>
        <Routes>
          {(currentUserRole === 'admin') ? <Route path={ROUTE_ADMIN} element={<AdminPage />} />
            : <Route path={ROUTE_HOME} element={<ProductListPage />} />}

          <Route path={ROUTE_EDIT_PROFILE} element={<EditProfilePage />} />
          <Route path={ROUTE_SIGN_IN} element={<AuthorizationPage />} />
          <Route path={ROUTE_SIGN_UP} element={<RegistrationPage />} />
          <Route path={ROUTE_TO_SELL} element={<CreateProductPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ContextCurrentUserRole.Provider>
      <Footer />
    </div>
  );
};

export default App;
