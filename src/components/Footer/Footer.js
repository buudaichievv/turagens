import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer>
        <div className='container'>
            <div className='footer_flex'>
                <div className='footer_info'>
                    <h5>Туры</h5>
                    <span>Раннее бронирование</span>
                    <span>Семейные туры</span>
                    <span>Пляжный отдых</span>
                    <span>Молодежные туры</span>
                    <span>Комбинированные туры</span>
                    <span>Экскурсионный тур</span>
                    <span>Свадебный тур</span>
                </div>
                <div className='footer_info'>
                    <h5>Популярные страны</h5>
                    <span>Туры в Турцию</span>
                    <span>Туры в Египет</span>
                    <span>Туры в Таиланд</span>
                    <span>Туры во Вьетнам</span>
                    <span>Туры в ОАЭ</span>
                    <span>Каталог туров</span>
                </div>
                <div className='footer_info'>
                    <h5>Контакты</h5>
                    <span>Отдел бронирования туров</span>
                    <span>+996 (550) 986-689</span>
                    <span>+996 (704) 986-689</span>
                    <span>WHATSAP +996 (999) 986-505</span>
                    <span>Офис +996 (312) 986-545</span>
                </div>
            </div>
        </div>
        </footer>
    )
}
