import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { SexCategoriesType, ConcreteCategoriesType } from '../../types/HeaderDTO';
import style from './Header.module.scss';
import { allCategories } from './mockData';

function ListItem (props: ConcreteCategoriesType) {
  const { id, name, concreteCategories } = props;
  const categories = concreteCategories
    .map(({
      id: idItem,
      name: nameItem,
    }) => <Link to="/" key={idItem} onClick={() => console.log(idItem)} className={style.item}>{nameItem}</Link>);

  return (
    <div className={style.listItem}>
      <Link className={style.listTitle} to="/" onClick={() => console.log(id)}>{name}</Link>
      {categories}
    </div>
  );
}

function List (props: SexCategoriesType) {
  const { id, gender, categories } = props;
  const menuItems = categories.map((item) => {
    const { name } = item;

    return <ListItem key={name} {...item} />;
  });

  return (
    <div>
      <Link to="/" role="presentation" className={style.menu} onClick={() => console.log(id)}>{gender}</Link>
      <div className={style.list}>
        {menuItems}
      </div>
    </div>
  );
}

export function Header () {
  const [value, setValue] = useState('');
  const { sexCategories } = allCategories;
  const dropdown = sexCategories.map((data) => {
    const { id } = data;

    return <List key={id} {...data} />;
  });
  const changeInput = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
  const inputInfo = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') { console.log(value); }
  };

  return (
    <div className={style.header}>
      <Link to="/">
        <img src={logo} className={style.logo} alt="logo" />
      </Link>
      <input
        value={value}
        type="text"
        className={style.input}
        placeholder="Поиск"
        onChange={changeInput}
        onKeyPress={inputInfo}
      />
      {dropdown}
      <Link to="/" className={style.link}>black label</Link>
      <Link to="/" className={style.link}>Безопасная сделка</Link>
      <Link to="/to-sell" className={style.sell}>Продать</Link>
      <Link to="/" className={style.auth}>Войти</Link>
    </div>
  );
}

export function AdminHeader () {
  return (
    <div className={style.header}>
      <Link to="/" className={style.auth}>
        Выйти
      </Link>
    </div>
  );
}
