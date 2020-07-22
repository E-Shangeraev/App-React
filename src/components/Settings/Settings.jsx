import React from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
    return (
        <div>
            <h2 className={s.color}>Настройки профиля</h2>
            <ul>
                <li>Добавить фото</li>
                <li>Сменить пароль</li>
                <li>Настроки приватности</li>
            </ul>
            <ul>
                <li className={s.delete}>Удалить профиль</li>
            </ul>
        </div>
    )
}

export default Settings;