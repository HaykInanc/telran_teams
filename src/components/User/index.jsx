import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import s from './style.module.sass';


export default function User({id, name, team}) {
  const { deleteUser } = useContext(Context);

  return (
    <div onDoubleClick={() => deleteUser(id)} className={s.item}>
        <p>{name}</p>
        <p className={s.team}>{team}</p>
    </div>
  )
}
