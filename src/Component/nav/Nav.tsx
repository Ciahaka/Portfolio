import React from 'react';
import classes from './Nav.module.css';

export const Nav = () => {
  return (
    <div className={classes.nav}>
      <a href="">Главная</a>
      <a href="">Навыки</a>
      <a href="">Проекты</a>
      <a href="">Контакты</a>
    </div>
  );
}
