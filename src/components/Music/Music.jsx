import React from 'react';
import s from './Music.module.css';

const Music = (props) => {
    return (
        <div>
            <p className={s.color}>Мои аудиозаписи</p>
            <ul className={s.playlist}>
                <li>Track-1</li>
                <li>Track-2</li>
                <li>Track-3</li>
                <li>Track-4</li>
                <li>Track-5</li>
            </ul>
        </div>
    )
}

export default Music;