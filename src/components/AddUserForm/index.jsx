import React, { useContext } from 'react';
import Select from 'react-select';
import s from './style.module.sass'
import { Context } from '../../context';


export default function AddUserForm({teams}) {
    const {addUser} = useContext(Context);
    
    const submit = event => {
        event.preventDefault();
        const {name, team} = event.target;
        addUser(name.value, team.value);
        name.value = '';
        team.value = '';
    }
  
    return (
    <div className={s.container}>
        <p>Добавить пользователя</p>
        <form onSubmit={submit}>
            <input type="text" placeholder='Имя' name='name'/>
            <Select options={teams} name={'team'}/>
            <button>Добавть</button>
        </form>
    </div>
  )
}
