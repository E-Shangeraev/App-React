import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

console.log(s);

const Navbar = () => {
    return (
    <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li><NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Messages</NavLink></li>
          <li><NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink></li>
          <li><NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink></li>
        </ul>
        <ul className={s.nav__list}>
          <li><NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navbar