import React from 'react';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

export function Footer () {
  return (
    <div className={style.footer}>
      <div className={style.wrapper}>
        <Link to="/" className={style.link}>Пользовательское соглашение</Link>
        <Link to="/" className={style.link}>Политика конфиденциальности</Link>
        <Link to="/" className={style.link}>Услуги</Link>
        <Link to="/" className={style.link}>FAQ</Link>
        <Link to="/" className={style.link}>Правила оказания услуг</Link>
        <Link to="/" className={style.link}>Контакты</Link>
        <Link to="/" className={style.link}>Блог</Link>
        <Link to="/" className={style.link}>Безопасная сделка</Link>
        <Link to="/" className={style.link}>Правила безопасной сделки</Link>
      </div>
      <div className={style.container}>
        <span className={style.name}>themarket, 2021</span>
        <div>
          <InstagramOutlined className={style.icon} />
          <FacebookOutlined className={style.icon} />
        </div>
      </div>
    </div>
  );
}
