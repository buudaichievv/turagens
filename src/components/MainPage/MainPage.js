import React,{useState} from 'react'
import './MainPage.css'
import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import { Button,Alert,Carousel} from 'react-bootstrap';
export default function MainPage() {
    const [show, setShow] = useState(false);
    let textInp = React.createRef()
    let DeleteInput = () =>{
        textInp.current.value = " "
    }
    return (
        <div>
            {/* <Carousel className = 'carousel'>
                        <Carousel.Item>
                        <img className = 'block'src = {slide1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {slide2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className = 'block'src = {slide3}/>
                        </Carousel.Item>
            </Carousel> */}
           <div className="container">
           <Alert show={show} variant="success" className="Alert">
              <Alert.Heading>Удачного полета!</Alert.Heading>
              <Button onClick={() => setShow(false)} className="Alert_btn">×</Button>
            </Alert>
            <div className="MainPage">
            <input type="text" className="MainPage_input" placeholder="ФИО"/>
            <input type="text" className="MainPage_input" placeholder="Страна отправления" />
            <input type="text" className="MainPage_input" placeholder="Email"/>
            <input type="text" className="MainPage_input" placeholder="Телефон"/>
            <span>Количество человек</span>
            <select name="" id="" className="MainPage_input">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
            </select>
            <textarea name="" id="" cols="30" rows="2" className="MainPage_input" placeholder='Ваше сообщение' ref={textInp}></textarea>
            <button className="MainPage_btn" onClick={() =>{
            setShow(true)
            DeleteInput()
            }} variant="outline-success">Заказать</button>
        </div>
        </div>
    </div>
    )
}
