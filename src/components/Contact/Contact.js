import React from 'react'
import './Contact.css'
import call from '../../img/call.png'
import Instagram from '../../img/instagram.png'
import WhatsApp from '../../img/whatsApp.png'
import Mail from '../../img/mail.png'
import Telegram from '../../img/telegram.png'
export default function Contact() {
    return (
        <div>
        <div className="blue_block"><h2>КОНТАКТЫ</h2></div>
        <div className="container">
          <div className="contact_wrapper">
              <div className="contact_text">
                <div className="block_one">
                <p>Отдел бронирования туров</p>
                <p><img src={call} alt="" />0999222111</p>
                <p><img src={call} alt="" />0999222111</p>
                </div>
                <div className="block_second">
                    <p>WHATSAPP</p>
                    <p><img src={call} alt="" />+996 (999) 986-505</p>
                </div>
                <div className="block_three">
                    <p>Офис</p>
                    <p><img src={call} alt="" />+996 (999) 986-505</p>
                </div>
                <div className="cos_set">
                    <a href="https://web.whatsapp.com"><img src={WhatsApp} alt="" /></a>
                    <a href="https://www.instagram.com"><img src={Instagram} alt="" /></a>
                    <a href="https://www.gmail.com"><img src={Mail} alt="" /></a>
                    <a href="https://www.telegram.org"><img src={Telegram} alt="" /></a>
                </div>
              </div>
          
          <iframe className="ifrm" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3637.264527468904!2d74.58566745496556!3d42.8766706938213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7182e2c212e1bbd!2z0J_QvtC70LjRgtC10YXQvdC40YfQtdGB0LrQuNC5INC60L7Qu9C70LXQtNC2INCc0KPQmtCg!5e0!3m2!1sru!2sus!4v1619534828094!5m2!1sru!2sus"
          width="500px" height="500px" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        </div>
    )
}
