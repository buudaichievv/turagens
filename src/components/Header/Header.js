import React from 'react'
import h from './Header.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../img/logo.png'
export default function Header() {
    return (
        <div>
            <header>
            <div className={h.Logo}>
            <img src={logo}/>
            <NavLink to='logo'className={h.logoImg}><li className={h.LogoText}>TURAGENCE</li></NavLink>
            </div>
            <div className={h.sections}>
            <NavLink to='order' className={h.menu}><li>Заказать тур</li></NavLink>
            <NavLink to='country' className={h.menu}><li>Страны</li></NavLink>
            <NavLink to='contact' className={h.menu}><li>Контакты</li></NavLink>
            <NavLink to='review' className={h.menu}><li>Отзывы</li></NavLink>
            </div>
            </header>
        </div>
    )
}
