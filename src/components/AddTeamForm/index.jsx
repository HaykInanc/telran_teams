import React from 'react'
import s from './style.module.sass'

export default function AddTeamForm({addTeam}) {
    const submit = event => {
        event.preventDefault();
        const {title} = event.target;
        addTeam(title.value);
        title.value = '';
    }
  
    return (
    <div className={s.container} >
        <p>Добавить команду</p>
        <form onSubmit={submit}>
            <input type="text" placeholder='Название' name='title'/>
            <button>Добавть</button>
        </form>
    </div>
  )
}
