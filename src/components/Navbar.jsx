import React from 'react';
import s from './Navbar.module.css';

console.log(s);

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li><a href="#" className={`${s.item} ${s.active}`}>Messages</a></li>
          <li><a href="#" className={s.item}>Profile</a></li>
          <li><a href="#" className={s.item}>News</a></li>
          <li><a href="#" className={s.item}>Music</a></li>
        </ul>
        <ul className={s.nav__list}>
          <li><a href="#" className={s.item}>Settings</a></li>
        </ul>
    </nav>
    )
}

export default Navbar