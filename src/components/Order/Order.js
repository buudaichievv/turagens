import React from 'react'
import img_navbar from '../../img/navbar.jpg';
import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import img_text from '../../img/header.png'
import {Carousel} from 'react-bootstrap';
import './Order.css'
import { NavLink } from 'react-router-dom';
const Cards = (props) =>{
    return(
        <div className='cards'>
            <img src={props.img} className='img_card'/>
            <div className='flex'>
            <p className='text-card'>{props.text}</p>
            <NavLink to="/Order"><button className='btn_card'>{props.price}</button></NavLink>
            </div>
        </div>
    )
}

const Sections = (props) =>{
    return(
        <div className='sections'>{props.text}</div>
    )
}
export default function Order(props) {
    return (
        <div>
             <img src={img_text} className='img_text'/>
             <img src={img_navbar} className='img_navbar'/>
                <section>
                <h2>Фото отчет наших туров</h2>
                <Carousel className = 'carousel'>
                        <Carousel.Item>
                        <img className = 'block'src = {slide1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {slide2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {slide3}/>
                        </Carousel.Item>
            </Carousel>
            </section>
            <section className = 'container flex_card'>
                {
                props.cards.map((el)=>{
                    return(<Cards img={el.img} text={el.text} price={el.price}/>)
                })
                }
                <button className='btn_more'>Больше туров</button>
            </section>
            <section className = 'container'>
                <h3 className="h3">Типы отдыха</h3>
                <div className='flex_sections'>
                    {
                    props.sections.map((el)=>{
                        return(<Sections text={el.Text}/>)
                    })
                    }
                </div>
            </section>
        </div>
    )
}
