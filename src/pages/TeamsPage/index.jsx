import React from 'react';
import User from '../../components/User';
import s from './style.module.sass';

export default function TeamsPage({users}) {
  return (

    <div className={s.container}>
      {
        users.length === 0
        ? <p>Пользователей нет</p>
        : users.map(user => <User key={user.id} {...user}/>)
      }

    </div>
  )
}
