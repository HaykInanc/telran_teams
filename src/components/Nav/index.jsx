import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.sass';

export default function Nav() {
  return (
    <nav className={s.nav}>
        <Link to='/configuration'>Конфигурации</Link>
        <Link to='/team'>Команды</Link>
    </nav>
  )
}
